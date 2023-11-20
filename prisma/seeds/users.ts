import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.upsert({
    where: { email: 'jon@52.film' },
    update: {},
    create: {
      email: 'jon@52.film',
      name: 'Jon',
      password: 'password',
    },
  });
}

export default main;
