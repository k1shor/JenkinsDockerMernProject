// import { API } from "./constants"
// import { isLoggedIn } from "./userApi"

// const {token} = isLoggedIn()

const API = "http://localhost:5000/api"

export const getAllCategories = () => {
    return fetch(`${API}/getallcategories`)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const addCategory = (category) => {
    console.log(API)
    return fetch(`${API}/addcategory`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(category)
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}
export const udpateCategory = (id, category) => {
    return fetch(`${API}/updatecategory/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(category)
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const getCategoryDetails = (id) => {
    return fetch(`${API}/getcategorydetails/${id}`)
        .then(res => res.json())
        .catch(error => console.log(error))
}

export const deleteCategory = (id) => {
    return fetch(`${API}/deletecategory/${id}`, {
        method: "DELETE",
        headers: {
        }
    })
        .then(res => res.json())
        .catch(error => console.log(error))
}