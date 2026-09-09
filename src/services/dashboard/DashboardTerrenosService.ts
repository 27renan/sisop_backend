import prismaClient from '../../prisma/index';

class DashboardTerrenosService {
  async execute() {
    try {
      const terrenos = await prismaClient.terreno.findMany({
        orderBy: {
          utilizado: 'desc',
        },
      });
      return terrenos;
    } catch (error) {
      throw new Error('Erro ao consultar os terrenos');
    }
  }
}

export { DashboardTerrenosService };
