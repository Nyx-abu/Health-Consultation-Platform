import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import app from './app.js'
import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'

dotenv.config() // Load environment variables from .env

const server = express()

// Middleware setup
server.use(cors())
server.use(express.json())

const prisma = new PrismaClient()

prisma
  .$connect()
  .then(() => console.log('Connected to the database successfully!'))
  .catch((err) => {
    console.error('Database connection failed: ', err)
    process.exit(1)
  })

server.post('/api/login', async (req, res) => {
  const { email, password } = req.body

  try {
    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email: email }
    })

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' })
    }

    res.status(200).json({ message: 'Login successful', userId: user.id })
  } catch (err) {
    console.error('Error during login: ', err)
    res.status(500).json({ error: 'An error occurred during login' })
  }
})

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})

server.use('/api', app)
