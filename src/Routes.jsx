import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home, OrderOrDelivery } from './index.jsx'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='order' element={<OrderOrDelivery />} />
            <Route path='dining' element={<OrderOrDelivery />} />
        </Route>
    )
)


export default router;