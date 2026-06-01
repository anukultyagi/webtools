import React from 'react'
import { NavLink } from 'react-router-dom'
import { tools } from '../../../data/toolsData'

const Header = () => {
    return (
        <>
            <nav className='container px-5 py-4 shadow-md flex justify-between items-center'>
                <div className=''>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }>
                        BrandLogo
                    </NavLink>
                </div>
                <div className='flex items-center gap-4'>

                    {tools.filter((item) => item.showInNavbar).map((item) => (
                        <NavLink key={item.id}
                            to={item.path}
                            className={({ isActive }) => isActive ? "border-b-2 border-amber-600" : " hover:text-amber-600"
                            }>
                            {item.title}
                        </NavLink>
                    ))}

                </div>
            </nav >
        </>
    )
}

export default Header