import router from "./Routes";
import { RouterProvider } from 'react-router-dom'
import { OrdOrDelProvider } from './Context/OrdOrDelContext.jsx'
import { useState } from "react";
import { useOrdOrDel } from "./Context/OrdOrDelContext.jsx";

function App() {
    const changeValue = (element) => {
        const {ordOrDel} = useOrdOrDel()
        // const [ordOrDel, setOrdOrDel] = useState("/order");
        // setOrdOrDel(element);
        console.log(ordOrDel);
    }
    return (
        <OrdOrDelProvider value={{ changeValue }}>
            <RouterProvider router={router} />
        </OrdOrDelProvider>
    )
}
export default App;