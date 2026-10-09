const express = require('express')
require('dotenv').config()
require('./db/connection')

const cors = require('cors')
const morgan = require('morgan')

const TestRoute = require('./routes/testRoutes')
const CategoryRoute = require('./routes/categoryRoute')
// const ProductRoute = require('./routes/productRoute')
// const UserRoute = require('./routes/userRoute')
// const OrderRoute = require('./routes/orderRoutes')
// const PaymentRoute = require('./routes/paymentRoute')

const app = express()

// middleware
app.use(express.json())
app.use(cors())
app.use(morgan('dev'))


app.use(TestRoute)
app.use('/api',CategoryRoute) 

// app.use('/api', ProductRoute)
// app.use('/api', UserRoute)
// app.use('/api', OrderRoute)
// app.use('/api', PaymentRoute)
// public\\uploads\\product_image-reason5-1765101115281-584044186.jpg
// app.use('/api/public/uploads', express.static('public/uploads') )


app.get('/', (request, response)=>{
    response.send({message: "SERVER IS RUNNING SUCCESSFULLY"})
})
app.get('/hello', (request, response)=>{
    response.send("Good Afternoon")
})
// endpoint: hello -> where the frontend connects
// request: data from frontend
// response: data/reply to frontend

const port = process.env.PORT || 5000

app.listen(port, ()=>{
    console.log("APP STARTED SUCCESSFULLY AT PORT: ", port)
})

// mvc - model, view, controller
// model - database (mongodb)
// view - frontend(react), endpoints
// controller - backend(node + express)