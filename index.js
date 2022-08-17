const express = require ('express') 
const app = express()
const dotenv = require ('dotenv')
const mongoose = require ('mongoose')
const authRoute = require ('./routes/auth')

const PORT = 5000

dotenv.config()


//connect to db
mongoose.connect (process.env.MONGO_DB_CONNECT, {useNewUrlParser: true},
() => console.log('connected to DB')
)

//middleware
app.use(express.json())





//route middleware
app.use('/api/user', authRoute)

app.listen(PORT,() => console.log (`Connected to port ${PORT}`))

