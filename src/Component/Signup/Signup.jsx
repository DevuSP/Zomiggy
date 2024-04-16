import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

function Signup() {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [empty, setEmpty] = useState("");  // if any value above is left empty while submit then a red para will appear in bottom them.
    const navigate = useNavigate();
    const handleClick = async (e) => {
        e.preventDefault();
        if (!userName) {
            setEmpty("Name");
        } else if (!email) {
            setEmpty("Email");
        } else if (!password) {
            setEmpty("Password");
        };
        try {
            const response = await axios.post("http://localhost:3000/Zomiggy/usersignup", { userName, email, password });  // server being used to receive info.
            console.log(`Response: ${response.data}`);  // either use response.data to not get [object objet] or console.log(response) nothing else.
            if (response.data === "Success") {
                navigate("/Zomiggy/login");  // navigate to login page as soon as above is done.
            }
        } catch (error) {
            console.log(`Error: ${error}.`);
        }
    }


    return (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-blue-50">
            <div className="bg-white p-7 rounded-lg w-25 hover:shadow-sm hover:shadow-blue-900">
                <h2 className="text-3xl text-blue-400"><strong>Signup</strong></h2>
                <form onSubmit={handleClick}>
                    <div className="mb-3 pt-5">
                        <label htmlFor="email" className="mr-3 text-lg">
                            <strong>Name</strong>
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter Name"
                            autoComplete="off"
                            className="p-2 rounded text-lg hover:shadow-sm hover:shadow-blue-300"
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                        {(empty === "Name") ? <p className="text-red-700 text-sm">*{empty} can't be left empty.</p> : null}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="mr-3 text-lg">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            className="p-2 rounded text-lg hover:shadow-sm hover:shadow-blue-300"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {(empty === "Email") ? <p className="text-red-600 text-sm">*{empty} can't be left empty.</p> : null}

                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="mr-3 text-lg">
                            <strong>
                                Password
                            </strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            id="password"
                            className="p-2 rounded text-lg hover:shadow-sm hover:shadow-blue-300"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {(empty === "Password") ? <p className="text-red-600 text-sm">*{empty} can't be left empty.</p> : null}

                    </div>
                    <button type="submit" className="flex justify-center items-center w-full p-2 bg-blue-600 text-white hover:bg-blue-400">
                        Signup
                    </button>
                    <p>{ }</p>
                </form>
                <p className="pt-6">Already have an account?</p>
                <Link to="/Zomiggy/login" className="pt-1 text-blue-600 hover:text-blue-400 hover:underline">
                    Login
                </Link>
            </div>
        </div>
    )
}
export default Signup;