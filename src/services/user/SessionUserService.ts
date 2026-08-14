import { compare } from 'bcryptjs';
import prismaClient from '../../prisma/index';
import { sign } from 'jsonwebtoken';

interface SessionUserServiceProps {
  email: string;
  senha: string;
}

class SessionUserService {
  async execute({ email, senha }: SessionUserServiceProps) {
    const user = await prismaClient.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!user) {
      throw new Error('Usuário não existe!');
    }

    // verificar se a senha é correta
    const senhaMatch = await compare(senha, user.senha);
    if (!senhaMatch) {
      throw new Error('Email/Senha senha é obrigatório!');
    }

    // Se tudo estiver correto, gerar token JWT (a ser implementado) e retornar os dados do usuário
    const token = sign({ nome: user.nome, email: user.email }, process.env.JWT_SECRET as string, {
      subject: user.id,
      expiresIn: '30d',
    });

    return {
      id: user.id,
      nome: user.nome,
      email: user.email,
      role: user.role,
      cod_unidade: user.cod_unidade,
      token: token,
    };
  }
}

export { SessionUserService };
