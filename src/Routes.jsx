import ReactDOM from 'react-dom/client'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home } from './index.jsx'


const Router = () => {
    return (
        <Routes path='/' element={<Layout />}>
            <Route path='' element={<Home />} />

        </Routes>
    )
}

export default Router;