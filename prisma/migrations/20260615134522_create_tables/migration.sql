-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'MANAGER');

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'USER',
    "om" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "obras" (
    "id" TEXT NOT NULL,
    "id_cipi" TEXT NOT NULL,
    "tipo_obra" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "servico" TEXT NOT NULL,
    "empresa_contratada" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "om" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "inicio_obra" TIMESTAMP(3) NOT NULL,
    "final_obra" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "obras_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "terrenos" (
    "id" TEXT NOT NULL,
    "situacao" TEXT NOT NULL,
    "utilizado" BOOLEAN NOT NULL,
    "resp_administrativo" TEXT NOT NULL,
    "tombo" TEXT NOT NULL,
    "area" DOUBLE PRECISION NOT NULL,
    "ocup_indevida" BOOLEAN NOT NULL,
    "enderco" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "complementento" TEXT NOT NULL,
    "valor_aquisicao" DOUBLE PRECISION NOT NULL,
    "data_aquisicao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "terrenos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "benfeitorias" (
    "id" TEXT NOT NULL,
    "apelido" TEXT NOT NULL,
    "situacao" TEXT NOT NULL,
    "conservacao" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "terreno_id" TEXT NOT NULL,

    CONSTRAINT "benfeitorias_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "benfeitorias" ADD CONSTRAINT "benfeitorias_terreno_id_fkey" FOREIGN KEY ("terreno_id") REFERENCES "terrenos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
