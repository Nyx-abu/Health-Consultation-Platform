const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

const register = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password and save user
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        role: role || 'USER'
      }
    });

    // Remove password from response
    const { password: _, ...userWithoutPassword } = newUser;

    res.status(201).json({ 
      message: 'User registered successfully', 
      user: userWithoutPassword
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign(
      { 
        id: user.id,
        email: user.email,
        role: user.role
      }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );

    res.json({ 
      message: 'Login successful', 
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await prisma.user.findFirst({ 
      where: { 
        email,
        role: 'ADMIN'
      } 
    });
    
    if (!admin) return res.status(404).json({ error: 'Admin account not found' });

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid)
      return res.status(401).json({ error: 'Invalid credentials' });

    const token = jwt.sign(
      { 
        id: admin.id,
        email: admin.email,
        role: admin.role
      }, 
      process.env.JWT_SECRET, 
      { expiresIn: '2h' }
    );

    res.json({ 
      message: 'Admin login successful', 
      token,
      user: {
        id: admin.id,
        email: admin.email,
        role: admin.role
      }
    });
  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const googleLogin = async (req, res) => {
  const { googleId, email } = req.body;

  if (!googleId || !email) {
    return res.status(400).json({ error: 'Google ID and email are required' });
  }

  try {
    // Find or create user with Google ID
    let user = await prisma.user.findFirst({ 
      where: { 
        OR: [
          { googleId },
          { email }
        ]
      } 
    });

    if (!user) {
      // Create new user with Google account
      user = await prisma.user.create({
        data: {
          email,
          googleId,
          role: 'USER'
        }
      });
    } else if (!user.googleId) {
      // Link Google account to existing email account
      user = await prisma.user.update({
        where: { id: user.id },
        data: { googleId }
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { 
        id: user.id,
        email: user.email,
        role: user.role
      }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }
    );

    res.json({ 
      message: 'Google login successful', 
      token,
      user: {
        id: user.id,
        email: user.email,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Google login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Export functions as module exports
module.exports = {
  register,
  login,
  adminLogin,
  googleLogin
};