import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const titles = [
  { title: 'The Godfather', releasedAt: new Date('1972-03-24') },
  { title: 'The Shawshank Redemption', releasedAt: new Date('1994-10-14') },
  { title: "Schindler's List", releasedAt: new Date('1993-12-15') },
  { title: 'Raging Bull', releasedAt: new Date('1980-12-19') },
  { title: 'Casablanca', releasedAt: new Date('1942-01-23') },
  { title: 'Oppenheimer', releasedAt: new Date('2021-02-28') },
  { title: 'Barbie', releasedAt: new Date('2021-02-28') },
  { title: 'The Matrix', releasedAt: new Date('1999-03-31') },
  { title: 'The Matrix Reloaded', releasedAt: new Date('2003-05-07') },
  { title: 'The Matrix Revolutions', releasedAt: new Date('2003-10-27') },
];

async function main() {
  await prisma.movie.createMany({
    data: titles,
  });
}

export default main;
