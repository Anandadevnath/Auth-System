import express from 'express'
import path from 'path'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoute.js'
import cors from 'cors';

dotenv.config()
const port = process.env.PORT || 3000

connectDB()
const app = express()

// CORS Configuration
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true, 
}));

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/api/users', userRoutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})