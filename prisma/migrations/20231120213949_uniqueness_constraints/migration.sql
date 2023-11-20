/*
  Warnings:

  - A unique constraint covering the columns `[title,released_at]` on the table `movies` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[movie_id,user_id]` on the table `ratings` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[movie_id,user_id]` on the table `watchlists` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[movie_id,user_id]` on the table `wishlists` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "movies_title_released_at_key" ON "movies"("title", "released_at");

-- CreateIndex
CREATE UNIQUE INDEX "ratings_movie_id_user_id_key" ON "ratings"("movie_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "watchlists_movie_id_user_id_key" ON "watchlists"("movie_id", "user_id");

-- CreateIndex
CREATE UNIQUE INDEX "wishlists_movie_id_user_id_key" ON "wishlists"("movie_id", "user_id");
