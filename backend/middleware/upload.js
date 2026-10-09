const multer = require('multer')
const fs = require('fs') //file system
const path = require('path')    // file path

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let file_destination = 'public/uploads'
        if (!fs.existsSync(file_destination)) {
            fs.mkdirSync(file_destination, { recursive: true })
        }
        cb(null, file_destination)
    },
    filename: function (req, file, cb) {
        // apple.png -> file.originalname 
        // extname(apple.png) -> .png
        // basename(apple.png,extname) -> apple
        let extname = path.extname(file.originalname)
        let basename = path.basename(file.originalname, extname)

        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        let filename = file.fieldname + '-' + basename + '-' + uniqueSuffix + extname

        cb(null, filename)
    }
})

const fileFilter = (req, file, cb) => {
    if (!file.originalname.match(/[.]jpg|png|jpeg|webp|JPG|JPEG|PNG|WEBP$/)) {
        cb(new Error("File type mismatch" ), false)
    }
    cb(null, true)
}

const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 2000000
    }
})

module.exports = upload