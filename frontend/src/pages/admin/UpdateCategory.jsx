import React, { useEffect, useState } from 'react'
import { getCategoryDetails, udpateCategory } from '../../api/categoryApi'
import { Link, useParams } from 'react-router-dom'

const UpdateCategory = () => {
  let [category_name, setCategoryName] = useState('')
  let {id} = useParams()

  const handleSubmit = e => {
    e.preventDefault()
    udpateCategory(id, { category_name })
      .then(data => {
        if (data.error) {
          alert(data.error)
        }
        else {
          alert(data.message)
        }
      })
  }

  useEffect(()=>{
    getCategoryDetails(id)
    .then((data)=>{
        if(data.error){
            console.log(data.error)
        }
        else{
            setCategoryName(data.category.category_name)
        }
    })
  },[id])

  return (
    <>
      <h3>Update Category</h3>
      <form className='w-1/2 p-10 my-10 shadow-lg'>
        <label htmlFor="cat_name" className='text-xl label'>Category Name</label>
        <input type="text" placeholder='eg: new category' className='input w-full' onChange={e => setCategoryName(e.target.value)} value={category_name} />
        <button className='btn btn-info' onClick={handleSubmit}>Update Category</button>
        <Link className='btn btn-warning' to='/category'>Back</Link>
      </form>
    </>
  )
}

export default UpdateCategory