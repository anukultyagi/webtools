import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Layout from '../Layout'
import Tools from '../Pages/Tools'
import NotFound from '../Pages/NotFound'

import { tools } from '../data/toolsData'

const AppRoutes = () => {
    return (
        <Routes >
            <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/tools' element={<Tools />} />
                {
                    tools.map((item) => {
                        return <Route key={item.id} path={item.path} element={<item.component />} />
                    })
                }
                {/* not found  */}
                <Route path='*' element={<NotFound />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes