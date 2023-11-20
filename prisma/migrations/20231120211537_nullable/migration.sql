/*
  Warnings:

  - You are about to drop the column `releaseDate` on the `movies` table. All the data in the column will be lost.
  - Added the required column `released_at` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "movies" DROP COLUMN "releaseDate",
ADD COLUMN     "released_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "description" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ratings" ALTER COLUMN "rating" DROP NOT NULL;
