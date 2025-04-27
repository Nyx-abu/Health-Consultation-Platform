import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import app from './app.js';  // Importing app.js
import bcrypt from 'bcryptjs'; // Import bcryptjs
import { PrismaClient } from '@prisma/client'; // Import PrismaClient

dotenv.config();  // Load environment variables from .env

const server = express();

// Middleware setup
server.use(cors());  // Allow cross-origin requests
server.use(express.json());  // Parse incoming JSON requests

// Initialize Prisma Client
const prisma = new PrismaClient();

// Test database connection on server start
prisma.$connect()
  .then(() => console.log('Connected to the database successfully!'))
  .catch(err => {
    console.error('Database connection failed: ', err);
    process.exit(1);
  });

// POST route for admin login
server.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Compare provided password with hashed password stored in DB
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Authentication successful, you can set some session/token if necessary
    // Example: You can use JWT or a simple session cookie
    // For simplicity, we return a success message here
    res.status(200).json({ message: 'Login successful', userId: user.id });

  } catch (err) {
    console.error('Error during login: ', err);
    res.status(500).json({ error: 'An error occurred during login' });
  }
});

// Start the Express server
server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});

server.use('/api', app); // Connect all routes from app.js
