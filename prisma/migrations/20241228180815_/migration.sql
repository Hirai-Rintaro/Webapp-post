/*
  Warnings:

  - Added the required column `category` to the `review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comment` to the `review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `director` to the `review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `posttitle` to the `review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `way` to the `review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "review" ADD COLUMN     "category" TEXT NOT NULL,
ADD COLUMN     "comment" TEXT NOT NULL,
ADD COLUMN     "director" TEXT NOT NULL,
ADD COLUMN     "posttitle" TEXT NOT NULL,
ADD COLUMN     "way" TEXT NOT NULL;
