import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    cart:Array,
    order: Array,
    reservation: Array
});

const User = mongoose.model("UserData", userSchema);
const Owner = mongoose.model("OwnerData", userSchema);

export { User, Owner };