/*
  Warnings:

  - You are about to drop the column `characters` on the `Story` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Story" DROP COLUMN "characters",
ADD COLUMN     "mainCharacters" TEXT[];
