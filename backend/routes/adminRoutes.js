const express = require('express');
const { verifyToken, isAdmin } = require('../middleware/authMiddleware');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

// Apply both middlewares to all admin routes
router.use(verifyToken);  // First verify the token
router.use(isAdmin);      // Then check if user is an admin

// Get all users - admin only
router.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        role: true,
        googleId: true,
        createdAt: true,
        updatedAt: true
      }
    });
    
    res.json({ users });
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get specific user - admin only
router.get('/users/:id', async (req, res) => {
  const userId = parseInt(req.params.id);
  
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        email: true,
        role: true,
        googleId: true,
        createdAt: true,
        updatedAt: true
      }
    });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    res.json({ user });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update user role - admin only
router.put('/users/:id/role', async (req, res) => {
  const userId = parseInt(req.params.id);
  const { role } = req.body;
  
  if (!role || !['USER', 'ADMIN'].includes(role)) {
    return res.status(400).json({ error: 'Invalid role' });
  }
  
  try {
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { role },
      select: {
        id: true,
        email: true,
        role: true,
        updatedAt: true
      }
    });
    
    res.json({ message: 'User role updated successfully', user: updatedUser });
  } catch (error) {
    console.error('Update role error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete user - admin only
router.delete('/users/:id', async (req, res) => {
  const userId = parseInt(req.params.id);

  // Prevent deleting self
  if (userId === req.user.id) {
    return res.status(400).json({ error: 'Cannot delete your own account' });
  }
  
  try {
    await prisma.user.delete({
      where: { id: userId }
    });
    
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Delete user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;