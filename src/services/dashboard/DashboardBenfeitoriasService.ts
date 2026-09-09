import prismaClient from '../../prisma/index';

class DashboardBenfeitoriasService {
  async execute() {
    try {
      const benfeitorias = await prismaClient.benfeitoria.findMany({
        orderBy: {
          conservacao: 'desc',
        },
      });
      return benfeitorias;
    } catch (error) {
      throw new Error('Erro ao consultar os benfeitorias');
    }
  }
}

export { DashboardBenfeitoriasService };
