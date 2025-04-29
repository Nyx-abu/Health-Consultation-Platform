const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

dotenv.config(); // Load environment variables from .env

const server = express();
const prisma = new PrismaClient();

// Middleware setup
server.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173" }));
server.use(express.json());

// Connect to database
prisma.$connect()
  .then(() => console.log('Connected to the database successfully!'))
  .catch((err) => {
    console.error('Database connection failed: ', err);
    process.exit(1);
  });

// Public routes
server.use('/api/auth', authRoutes);

// Protected routes
server.use('/api/user', userRoutes);    // User-level protected routes
server.use('/api/admin', adminRoutes);  // Admin-level protected routes

// Health check route
server.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down gracefully');
  await prisma.$disconnect();
  process.exit(0);
});