const { check, validationResult } = require('express-validator')

exports.categoryRules = [
    check('category_name', 'Category Name is required').notEmpty()
        .isAlpha().withMessage("Category must only be alphabets")
        .isLength({ min: 3 }).withMessage("Category name must be at least 3 characters")
]

exports.validationMethod = (req, res, next) => {
    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array()[0].msg })
    }
    next()
}

exports.categoryUpdateRules = [
    check('category_name').optional()
        .isAlpha().withMessage("Category must only be alphabets")
        .isLength({ min: 3 }).withMessage("Category name must be at least 3 characters")
]

exports.productAddRules = [
    check('product_name', 'Product name is required').notEmpty()
        .isLength({ min: 3 }).withMessage("Product name must be at least 3 characters"),
    check('product_price', 'Product price is required').notEmpty()
        .isNumeric().withMessage("Price must be a number"),
    check('count_in_stock', 'count in stock is required').notEmpty()
        .isNumeric().withMessage("Count must be a number"),
    check('product_description', 'Description is required').notEmpty()
        .isLength({ min: 20 }).withMessage("Description must be at least 20 characters"),
    check('category', 'Category is required').notEmpty().isMongoId().withMessage("category invalid")
]

exports.userRegisterRules = [
    check('username', 'Username is required').notEmpty().isLength({ min: 3 }).withMessage("username must be at least 3 characters")
    .not()
    .isIn(['test','admin','password']).withMessage("THIS USERNAME IS NOT ALLOWED")
    
    ,
    check('email', "Email is required").notEmpty().isEmail().withMessage("Email format incorrect"),
    check('password', "Password is required").notEmpty()
        .matches(/[a-z]/).withMessage("Password must contain at least 1 lowercase alphabet")
        .matches(/[A-Z]/).withMessage("Password must contain at least 1 uppercase alphabet")
        .matches(/[0-9]/).withMessage("Password must contain at least 1 number")
        .matches(/[!@#$%^&]/).withMessage("Password must contain at least 1 special character")
        .isLength({min: 8}).withMessage("Password must be at least 8 characters")
        .isLength({max: 15}).withMessage("Password must not exceed 15 characters")
]