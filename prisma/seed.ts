import { PrismaClient } from '@prisma/client';

import seedUsers from './seeds/users';
import seedMovies from './seeds/movies';

const prisma = new PrismaClient();

async function main() {
  await seedUsers();
  await seedMovies();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
