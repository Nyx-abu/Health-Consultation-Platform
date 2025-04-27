import bcrypt from 'bcryptjs'

const hashPassword = async () => {
  const hashedPassword = await bcrypt.hash('admin123', 10)
  console.log('Hashed Password:', hashedPassword)
}

hashPassword()
