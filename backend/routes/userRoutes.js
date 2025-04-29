const express = require('express');
const { verifyToken } = require('../middleware/authMiddleware');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

// Apply middleware to all user routes
router.use(verifyToken);

// Get user profile - accessible to authenticated users
router.get('/profile', async (req, res) => {
  try {
    const userId = req.user.id;
    
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        role: true,
        createdAt: true,
        updatedAt: true
      }
    });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({ user });
  } catch (error) {
    console.error('Profile fetch error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update user profile
router.put('/profile', async (req, res) => {
  const userId = req.user.id;
  const { email } = req.body;
  
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { email },
      select: {
        id: true,
        email: true,
        role: true,
        updatedAt: true
      }
    });
    
    res.json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (error) {
    console.error('Profile update error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;