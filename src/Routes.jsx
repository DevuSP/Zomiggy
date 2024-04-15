import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home, OrderOrDelivery, Login, Signup } from './index.jsx'


const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/Zomiggy' element={<Layout />}>
                <Route path='' element={<Home />} />
                <Route path='/Zomiggy/order' element={<OrderOrDelivery />} />
                <Route path='/Zomiggy/dining' element={<OrderOrDelivery />} />
            </Route>
            <Route path='/Zomiggy/login' element={<Login />}></Route>
            <Route path='/Zomiggy/signup' element={<Signup />}></Route>
        </>
    )
)


export default router;