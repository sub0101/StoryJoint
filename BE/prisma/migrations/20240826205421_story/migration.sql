-- DropForeignKey
ALTER TABLE "Chapter" DROP CONSTRAINT "Chapter_storyId_fkey";

-- AlterTable
ALTER TABLE "Story" ALTER COLUMN "Rating" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Tag" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TagOnStory" (
    "tagid" INTEGER NOT NULL,
    "storyid" TEXT NOT NULL,

    CONSTRAINT "TagOnStory_pkey" PRIMARY KEY ("storyid","tagid")
);

-- AddForeignKey
ALTER TABLE "TagOnStory" ADD CONSTRAINT "TagOnStory_tagid_fkey" FOREIGN KEY ("tagid") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TagOnStory" ADD CONSTRAINT "TagOnStory_storyid_fkey" FOREIGN KEY ("storyid") REFERENCES "Story"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_storyId_fkey" FOREIGN KEY ("storyId") REFERENCES "Story"("id") ON DELETE CASCADE ON UPDATE CASCADE;
