const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function seed() {
  const users = [
    {
      email: "admin@example.com",
      password: "admin123",
      role: "ADMIN"
    },
    {
      email: "user@example.com",
      password: "user123",
      role: "USER"
    }
  ];

  try {
    for (const user of users) {
      const hashedPassword = await bcrypt.hash(user.password, 10);

      await prisma.user.upsert({
        where: { email: user.email },
        update: {}, // No updates if the user already exists
        create: {
          email: user.email,
          password: hashedPassword,
          role: user.role
        }
      });
    }

    console.log("Seeding completed successfully!");
  } catch (error) {
    console.error("Error during seeding:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
