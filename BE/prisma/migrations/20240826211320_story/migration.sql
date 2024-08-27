/*
  Warnings:

  - You are about to drop the `Tag` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TagOnStory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TagOnStory" DROP CONSTRAINT "TagOnStory_storyid_fkey";

-- DropForeignKey
ALTER TABLE "TagOnStory" DROP CONSTRAINT "TagOnStory_tagid_fkey";

-- AlterTable
ALTER TABLE "Story" ADD COLUMN     "tags" TEXT[];

-- DropTable
DROP TABLE "Tag";

-- DropTable
DROP TABLE "TagOnStory";
