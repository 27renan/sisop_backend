import prismaClient from '../../prisma/index';

class DashboardObrasService {
  async execute() {
    try {
      const obras = await prismaClient.obras.findMany({
        orderBy: {
          inicio_obra: 'desc',
        },
      });

      return obras;
    } catch (error) {
      throw new Error('Erro ao consultar obras');
    }
  }
}

export { DashboardObrasService };
