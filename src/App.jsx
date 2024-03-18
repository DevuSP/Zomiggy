import router from "./Routes";
import { RouterProvider } from 'react-router-dom'
import { OrdOrDelProvider } from './Context/OrdOrDelContext.jsx'
import { useState } from "react";

function App() {
    const [ordOrDel, setOrdOrDel] = useState("/order");
    const changeValue = (element) => {
        setOrdOrDel(element);
    }
    return (
        <OrdOrDelProvider value={{ ordOrDel, changeValue }}>
            <RouterProvider router={router} />
        </OrdOrDelProvider>
    )
}
export default App;