import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { User, Owner } from "./models/Users.js";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(cors());
// app.use(express.json());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/FoodDB');

// check for email already exist or not. 
app.post("/Zomiggy/usersignup", async (req, res) => {
    const userName = req.body.userName;
    const email = req.body.email;
    const password = req.body.password;
    try {
        const response = await User.findOne({ email: email });
        console.log("DB response " + response);
        if (response === null) {
            const user = new User({
                name: userName,
                email: email,
                password: password,
                data: []
            })
            try {
                await user.save();
                console.log(`${userName} Added`);
                res.send("Success");
            } catch (error) {
                console.log(error);
                res.send(error);
            }
        } else {
            console.log("server exist");
            res.send("Exist"); // id exist in data;
        }
    } catch (error) {
        res.send(error);
    }

});

app.post("/Zomiggy/login", async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    try {
        const response = await User.findOne({ email: email });
        console.log("response " + response);
        if (response === null) {
            console.log("null verified");
            res.send("Email");
        } else if (response.password !== password) {
            res.send("Password");
        } else if (response.password === password) {
            console.log("password" + response.password);
            res.send("Success");
        }
    } catch (error) {
        res.send(error);
    }
});

app.listen(port, () => {
    console.log(`Server is running at ${port}.`)
});  // package.json under script adding "start":"nodemon index.js"