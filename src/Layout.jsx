import React from 'react'
import Header from './components/layouts/Header/Header'
import Footer from './components/layouts/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <main className='min-h-screen flex flex-col justify-between'>
            <Header />
            {<Outlet />}
            <Footer />
        </main>
    )
}

export default Layout