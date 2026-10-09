import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Contact from './pages/Contact'
import Blogs from './pages/Blogs'

import AdminCategory from './pages/admin/AdminCategory'
import AddCategory from './pages/admin/AddCategory'
import UpdateCategory from './pages/admin/UpdateCategory'

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='contact' element={<Contact />} />
                <Route path='blogs' element={<Blogs />} />



                <Route index element={<AdminCategory />} />
                <Route path='category/new' element={<AddCategory />} />
                <Route path='category/edit/:id' element={<UpdateCategory />} />

                {/* </Route> */}
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes