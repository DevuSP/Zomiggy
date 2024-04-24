import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";
import { useOrdOrDel } from "../../Context/OrdOrDelContext";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [empty, setEmpty] = useState("");  // if any value above is left empty while submit then a red para will appear in bottom them.
    const [fail, setFail] = useState(""); //if failed
    const { changeLoggedIn, changeUserId } = useOrdOrDel(); //if logged in.

    const navigate = useNavigate();
    const handleClick = async (e) => {
        e.preventDefault();
        if (!email) {
            setEmpty("Email");
        } else if (!password) {
            setEmpty("Password");
        };
        try {
            const response = await axios.post("http://localhost:3000/Zomiggy/login", { email, password });  // server being used to receive info.
            console.log(`Response: ${response.data}`);  // either use response.data to not get [object objet] or console.log(response) nothing else.
            if (response.data === true) { //successful.
                changeLoggedIn(true);
                changeUserId(email);
                navigate("/Zomiggy");  // navigate to login page as soon as above is done.
            } else {
                console.log("login " + response.data);
                setFail(response.data);
                console.log("reason for error " + fail);
            }
        } catch (error) {
            console.log("Error " + error);
        }
    }

    return (
        <div className="flex flex-col justify-center items-center w-full h-screen bg-slate-50">
            <div className="bg-white p-7 rounded-lg w-25 hover:shadow-sm hover:shadow-slate-900">
                <h2 className="text-3xl text-slate-400"><strong>Login</strong></h2>
                <form onSubmit={handleClick}>
                    <div className="mb-3 pt-5">
                        <label htmlFor="email" className="mr-3 text-lg">
                            <strong>Email</strong>
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            className="p-2 rounded text-lg hover:shadow-sm hover:shadow-slate-300"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                                setFail("")

                            }}
                        />
                        {(empty === "Email") ? <p className="text-red-600 text-sm">*{empty} can't be left empty.</p> : null}
                        {(fail === "Email") ? <p className="text-red-600 text-sm">*{fail} is written wrong.</p> : null}

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
                            className="p-2 rounded text-lg hover:shadow-sm hover:shadow-slate-300"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                                setFail("")
                            }}
                        />
                        {(empty === "Password") ? <p className="text-red-600 text-sm">*{empty} can't be left empty.</p> : null}
                        {(fail === "Password") ? <p className="text-red-600 text-sm">*{fail} is written wrong.</p> : null}

                    </div>
                    <button type="submit" className="flex justify-center items-center w-full p-2 bg-slate-600 text-white hover:bg-slate-400">
                        Sign In
                    </button>
                </form>
                <p className="pt-6">Are you a new user?</p>
                <Link to="/Zomiggy/signup" className="pt-1 text-slate-600 hover:text-slate-400 hover:underline">
                    Register Here
                </Link>
            </div>
        </div>
    );
}
export default Login;