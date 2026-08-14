/*
  Warnings:

  - The primary key for the `unidades` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `unidades` table. All the data in the column will be lost.
  - The `unidade_id` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_unidade_id_fkey";

-- AlterTable
ALTER TABLE "unidades" DROP CONSTRAINT "unidades_pkey",
DROP COLUMN "id",
ADD COLUMN     "cd_unidade" SERIAL NOT NULL,
ADD CONSTRAINT "unidades_pkey" PRIMARY KEY ("cd_unidade");

-- AlterTable
ALTER TABLE "users" DROP COLUMN "unidade_id",
ADD COLUMN     "unidade_id" INTEGER;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_unidade_id_fkey" FOREIGN KEY ("unidade_id") REFERENCES "unidades"("cd_unidade") ON DELETE SET NULL ON UPDATE CASCADE;
