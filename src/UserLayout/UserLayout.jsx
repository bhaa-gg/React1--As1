import React from 'react'
import Nav from '../Components/Nav/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'

export default function UserLayout() {
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />

        </>
    )
}
