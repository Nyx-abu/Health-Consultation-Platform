import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function updatePassword() {
  const email = "admin@example.com";
  const plainPassword = "admin123"; // The plain text password

  const hashedPassword = await bcrypt.hash(plainPassword, 10);

  const user = await prisma.user.update({
    where: { email },
    data: { password: hashedPassword },
  });

  console.log("Password updated successfully:", user);
}

updatePassword()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
