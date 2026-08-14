import { hash } from 'bcryptjs';
import prismaClient from '../../prisma/index';

interface CreateUserProps {
  nome: string;
  email: string;
  senha: string;
  role?: 'USER' | 'MANAGER';
  cod_unidade: number;
}

class CreateUserService {
  async execute({ nome, email, senha, role, cod_unidade }: CreateUserProps) {
    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (userAlreadyExists) {
      throw new Error('Usuário já existente!');
    }

    const senhaHash = await hash(senha, 8);

    const user = await prismaClient.user.create({
      data: {
        nome: nome,
        email: email,
        senha: senhaHash,
        role: role,
        unidade: {
          connect: {
            cd_unidade: cod_unidade,
          },
        },
      },
      select: {
        id: true,
        nome: true,
        email: true,
        role: true,
        createdAt: true,
        cod_unidade: true,
      },
    });

    return user;
  }
}

export { CreateUserService };
