import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { User, Owner } from "./models/Users.js";
import bodyParser from "body-parser";
import bcrypt from "bcrypt";

const app = express();
const saltRounds = 10; // for encryption.
const port = 3000;

app.use(cors());
// app.use(express.json());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/FoodDB');

// check for email already exist or not. 
app.post("/Zomiggy/usersignup", async (req, res) => {
    const userName = req.body.userName;
    const email = req.body.email;
    let password;

    try {
        const response = await User.findOne({ email: email });
        console.log("DB response " + response);
        if (response) { res.send("Exist"); }

        bcrypt.hash(req.body.password, saltRounds, async function (err, hash) {
            if (err) throw err;
            console.log(hash);
            password = hash;

            const user = new User({
                name: userName,
                email: email,
                password: password,
                data: []
            });

            try {
                await user.save();
                console.log(`${userName} Added`);
                res.send("Success");
            } catch (error) {
                console.log(error);
                res.send(error);
            }
        });

    } catch (error) {
        res.send(error);
    }

});

app.post("/Zomiggy/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const response = await User.findOne({ email: email });
        console.log("Login response " + response);
        if (response === null) {
            console.log("NO User with this email found.");
            res.send("Email");  // means no user with this email found.
        }
        bcrypt.compare(password, response.password, (err, result) => {
            if (err) throw err;
            console.log("login res password " + response.password);
            console.log("result " + result);
            res.send(result); // sends true for right password and false for wrong.
        });
    } catch (error) {
        res.send(error);
    }
});
// db.coll.updateOne({"_id": 1}, {$push :{"array": 1}})

app.post("/Zomiggy/deliverytocart", async (req, res) => {
    const { image, dish, rating, price, deliveryTime, userId } = req.body;
    const itemId = Date.now();
    const cartObject = { itemId, image, dish, rating, price, deliveryTime }
    try {
        const response = await User.findOneAndUpdate({ email: userId }, { $push: { cart: cartObject } });
        res.send(true);
    } catch (error) {
        console.log(error);
    }
});

app.post("/Zomiggy/cart", async (req, res) => {
    const email = req.body.userId;
    try {
        const response = await User.findOne({ email: email });
        res.send(response.cart);
    } catch (error) {
        console.log(error);
    }
});

app.post("/Zomiggy/remove-item", async (req, res) => {
    const { itemId, userId } = req.body;
    const removeItem = (data) => {
        const newCart = [];
        data.forEach((e) => {
            (e.itemId !== itemId) ? newCart.push(e) : null;
        });
        return newCart;
    }
    console.log(userId);
    try {
        const response = await User.findOne({ email: userId });
        const update = await User.updateOne({ email: userId }, { cart: removeItem(response.cart) });
        res.send(update.acknowledged);
    } catch (error) {
        console.log(error);
    }
})

app.listen(port, () => {
    console.log(`Server is running at ${port}.`)
});  // package.json under script adding "start":"nodemon index.js"