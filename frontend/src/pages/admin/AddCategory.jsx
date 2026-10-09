import React, { useState } from 'react'
import { addCategory } from '../../api/categoryApi'
import { Link } from 'react-router-dom'

const AddCategory = () => {
  let [category_name, setCategoryName] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    addCategory({ category_name })
      .then(data => {
        if (data.error) {
          alert(data.error)
        }
        else {
          alert(data.message)
          setCategoryName('')
        }
      })
  }

  return (
    <>
      <h3>Add New Category</h3>
      <form className='w-1/2 p-10 my-10 shadow-lg'>
        <label htmlFor="cat_name" className='text-xl label'>Category Name</label>
        <input type="text" placeholder='eg: new category' className='input w-full' onChange={e => setCategoryName(e.target.value)} value={category_name} />
        <button className='btn btn-info' onClick={handleSubmit}>Add New Category</button>
        <Link className='btn btn-warning' to='/category'>Back</Link>
      </form>
    </>
  )
}

export default AddCategory