import React from 'react'
import Header from './components/layouts/Header/Header'
import Footer from './components/layouts/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <main className='min-h-screen flex flex-col justify-between bg-amber-50 font-roboto'>
            <Header />
            <section className='container p-3'>
                {<Outlet />}
            </section>
            <Footer />
        </main>
    )
}

export default Layout