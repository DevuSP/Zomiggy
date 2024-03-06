import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={Layout}>
            <Route path='' element=''></Route>
            <Route path='' element=''></Route>
            <Route path='' element=''></Route>
            <Route path='' element=''></Route>
        </Route>
    )
)

export default router;