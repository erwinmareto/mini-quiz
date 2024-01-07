/*
  Warnings:

  - You are about to drop the column `category` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the `UserResponse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserResponse" DROP CONSTRAINT "UserResponse_optionId_fkey";

-- DropForeignKey
ALTER TABLE "UserResponse" DROP CONSTRAINT "UserResponse_questionId_fkey";

-- DropForeignKey
ALTER TABLE "UserResponse" DROP CONSTRAINT "UserResponse_quizId_fkey";

-- DropForeignKey
ALTER TABLE "UserResponse" DROP CONSTRAINT "UserResponse_userId_fkey";

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "category";

-- DropTable
DROP TABLE "UserResponse";

-- DropEnum
DROP TYPE "Category";

-- CreateTable
CREATE TABLE "Score" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "quizId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Score_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Score" ADD CONSTRAINT "Score_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "QuizGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
