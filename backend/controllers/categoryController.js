const CategoryModel = require('../models/categoryModel')

// CRUD Operations

// Create
exports.addCategory = async (req, res) => {

    let categoryExists = await CategoryModel.findOne({
        category_name: req.body.category_name 
    })

    if (categoryExists) {
        return res.status(400).json({ error: "Category already exists" })
    }

    // let categoryToAdd = await CategoryModel.create({
    //     category_name: req.body.category_name
    // })

    let categoryToAdd = new CategoryModel({
        category_name: req.body.category_name
    })
    categoryToAdd = await categoryToAdd.save()

    if (!categoryToAdd) {
        return res.status(400).json({ error: "Something went wrong", success: false })
    }
    res.send({ categoryToAdd, message: "Category added successfully", success: true })
}

// Retrieve
exports.getAllCategories = async (req, res) => {
    let categories = await CategoryModel.find()
    if (!categories) {
        return res.status(400).json({ error: "Categories not found", success: false })
    }
    res.send({ categories, success: true })
}

exports.getCategoryDetails = async (req, res) => {
    let category = await CategoryModel.findById(req.params.id)
    // let category = await CategoryModel.findById(req.query.id)
    if (!category) {
        return res.status(400).json({ error: "Category not found", success: false })
    }
    res.send({ category, success: true })
}

exports.updateCategory = async (req, res) => {
    let categoryToUpdate = await CategoryModel.findByIdAndUpdate(
        req.params.id, {
        category_name: req.body.category_name
    },
        { new: true }
    )

    // let categoryToUpdate = await CategoryModel.findById(req.params.id)
    // categoryToUpdate.category_name = req.body.category_name
    // categoryToUpdate = await categoryToUpdate.save()


    if (!categoryToUpdate) {
        return res.status(400).json({ error: "Something went wrong" })
    }
    res.send({ categoryToUpdate, success: true, message: "Category Updated successfully" })
}

// exports.deleteCategory = async (req, res) => {
//     CategoryModel.findByIdAndDelete(req.params.id)
//         .then(categoryToDelete => {
//             if (!categoryToDelete) {
//                 return res.status(400).json({ error: "Category Not found" })
//             }
//             res.send({ categoryToDelete, success: true, message: "Category Deleted Successfully" })
//         })
//         .catch(error => res.status(400).json({ error: "Something went wrong" }))
// }

exports.deleteCategory = async (req, res) => {
    try {
        let categoryToDelete = await CategoryModel.findByIdAndDelete(req.params.id)
        if (!categoryToDelete) {
            return res.status(400).json({ error: "Category Not found" })
        }
        res.send({ categoryToDelete, success: true, message: "Category Deleted Successfully" })
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

/*
req.body -> data is passed using body of a form
body: JSON.stringify({category_name: 'example'})

req.params.id -> data is passed using params/url
example: profile/id

req.query.id -> data is passed using variable in url
profile?id=xyz
*/
/*
res.json(json_data)
res.send(obj)
/*
status code :
404 : not found
400 : bad request
200 : OK (default)
300 : relay
500 : server error
401 : authentication error
403 : forbidden error
*/

/*
CREATE-
    Model.create(object) - inserts into db

RETRIEVE
    Model.find() - returns all data from db
    Model.find(filterObj) - returns all data from db that matches filter

    Model.findById(ObjectId) - returns an object with given ObjectId

    Model.findOne() - returns first data from db
    Model.findOne(filterObj) - returns first data from db that matches filter

UPDATE
    Model.findByIdAndUpdate(id, object, options) 
        id -> id of the object to update
        object -> updating object with updated fields


*/