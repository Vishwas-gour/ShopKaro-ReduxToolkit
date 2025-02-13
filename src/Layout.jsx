import {  Outlet } from "react-router-dom"
import Footer from './NonOutlets/Footer'
import MyNav from './NonOutlets/MyNav'

function Layout() {
    return (
        <>
            <MyNav />
            <Outlet />
            <Footer />

        </>
    )
}

export default Layout