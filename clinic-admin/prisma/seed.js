require("dotenv").config();

const { PrismaClient } = require("@prisma/client");
const { PrismaPg } = require("@prisma/adapter-pg");
const bcrypt = require("bcryptjs");

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

async function main() {
  const passwordHash = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
  console.log(passwordHash, process.env.ADMIN_PASSWORD);

  const admin = await prisma.user.upsert({
    where: {
      email: "admin@shineskincare.com",
    },
    update: {},
    create: {
      name: "Dr. Sugandh Gandhi",
      email: "admin@shineskincare.com",
      passwordHash,
      role: "ADMIN",
    },
  });

  console.log("Admin created:", admin.email);

  const categories = [
    { name: "Skin Care", slug: "skin-care" },
    { name: "Hair Care", slug: "hair-care" },
    { name: "Treatments", slug: "treatments" },
    { name: "Skin Health", slug: "skin-health" },
    { name: "Clinic Updates", slug: "clinic-updates" },
  ];

  for (const category of categories) {
    await prisma.category.upsert({
      where: {
        slug: category.slug,
      },
      update: {
        name: category.name,
      },
      create: category,
    });
  }

  console.log("Categories seeded successfully");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
