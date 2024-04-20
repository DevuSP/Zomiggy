import router from "./Routes";
import { RouterProvider } from 'react-router-dom'
import { OrdOrDelProvider } from './Context/OrdOrDelContext.jsx'
import { useState } from "react";

function App() {
    const [ordOrDel, setOrdOrDel] = useState("/Zomiggy/dining"); // default value for ordOrDel.
    const changeValue = (e) => {
        setOrdOrDel(e);
    }
    const [loggedIn, setLoggedIn] = useState(false);
    const changeLoggedIn = (e) => {
        setLoggedIn(e);
    };
    const [userId, setUserId] = useState("Guest");
    const changeUserId = (e) => {
        setUserId(e);
    }
    return (
        <OrdOrDelProvider value={{ ordOrDel, changeValue, loggedIn, changeLoggedIn, userId, changeUserId }}>
            <RouterProvider router={router} />
        </OrdOrDelProvider>
    )
}
export default App;