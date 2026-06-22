/*
  Warnings:

  - You are about to drop the column `unidade_id` on the `users` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_unidade_id_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "unidade_id",
ADD COLUMN     "cod_unidade" INTEGER;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_cod_unidade_fkey" FOREIGN KEY ("cod_unidade") REFERENCES "unidades"("cd_unidade") ON DELETE SET NULL ON UPDATE CASCADE;
