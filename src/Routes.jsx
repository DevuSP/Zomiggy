import { Route, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home, OrderOnline } from './index.jsx'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='order' element={<OrderOnline />} />
            <Route path='dining' element={<OrderOnline />} />
        </Route>
    )
)


export default router;