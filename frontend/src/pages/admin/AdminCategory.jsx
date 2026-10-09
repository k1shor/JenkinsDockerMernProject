import React, { useEffect, useState } from 'react'
import { deleteCategory, getAllCategories } from '../../api/categoryApi'
import { Link } from 'react-router-dom'

const AdminCategory = () => {
  let [categories, setCategories] = useState([])
  let [success, setSuccess] = useState(false)

  useEffect(() => {
    getAllCategories()
    .then(data=>{
      if(data.error){
        console.log(data.error)
      }
      else{
        setCategories(data.categories)
        setSuccess(false)
      }
    })
   }, [success])

   const handleDelete = id => e => {
    e.preventDefault()
    let answer = confirm("Are you sure you want to delete this category?")
    if(answer){
      deleteCategory(id)
      .then(data=>{
        if(data.error){
          alert(data.error)
        }
        else{
          alert(data.message)
          setSuccess(true)
        }
      })
    }
   }

  return (
    <>
     <h3>Categories</h3>
     <Link to='/category/new' className='btn btn-secondary my-3'>Add New Category</Link> 
     <table className='table text-center w-full shadow-lg'>
      <thead className='bg-blue-400 text-white'>
        <tr>
          <td className='w-1/4'>S.No.</td>
          <td className='w-3/4'>Category Name</td>
          <td colSpan={2} className='w-1/4'>Action</td>
        </tr>
      </thead>
      <tbody>
        {
          categories.length > 0 &&
          categories.map((category, i) => {
            return <tr key={category._id} className='hover:bg-slate-100 cursor-pointer'>
              <td>{i+1}</td>
              <td>{category.category_name}</td>
              <td><Link to={`/category/edit/${category._id}`} className='btn btn-info'>Update</Link></td>
              <td><button className='btn btn-warning' onClick={handleDelete(category._id)}>Remove</button></td>
            </tr>
          })
        }
      </tbody>
     </table>

    </>
  )
}

export default AdminCategory