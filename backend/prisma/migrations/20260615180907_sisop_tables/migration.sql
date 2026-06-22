-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_unidade_id_fkey";

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "unidade_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_unidade_id_fkey" FOREIGN KEY ("unidade_id") REFERENCES "unidades"("id") ON DELETE SET NULL ON UPDATE CASCADE;
