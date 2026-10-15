import prismaClient from '../../prisma/index';

class DetailUserService {
  async execute(user_id: string) {
    const user = await prismaClient.user.findFirst({
      where: {
        id: user_id,
      },
      select: {
        id: false,
        nome: true,
        email: true,
        role: true,
        createdAt: true,
        cod_unidade: true,
      },
    });

    if (!user) {
      throw new Error('Usuário não encontrado!');
    }

    if (user.cod_unidade === null) {
      throw new Error('Usuário não possui uma unidade vinculada!');
    }

    const unidade = await prismaClient.unidade.findFirst({
      where: {
        cd_unidade: user?.cod_unidade,
      },
      select: {
        nome: true,
        sigla: true,
      },
    });

    const userDetails = {
      ...user,
      unidade,
    };

    return userDetails;
  }
}

export { DetailUserService };
