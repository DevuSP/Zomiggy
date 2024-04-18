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
    return (
        <OrdOrDelProvider value={{ ordOrDel, changeValue, loggedIn, changeLoggedIn }}>
            <RouterProvider router={router} />
        </OrdOrDelProvider>
    )
}
export default App;