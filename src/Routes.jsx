import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home, OrderOrDelivery } from './index.jsx'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/Zomiggy' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='/Zomiggy/order' element={<OrderOrDelivery />} />
            <Route path='/Zomiggy/dining' element={<OrderOrDelivery />} />
        </Route>
    )
)


export default router;