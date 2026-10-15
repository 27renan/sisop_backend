import prismaClient from '../../prisma';

class GetObraService {
  async execute(id: string) {
    try {
      const obra = await prismaClient.obras.findUnique({
        where: {
          id: id,
        },
      });

      if (!obra) {
        throw new Error('Obra não encontrada');
      }

      return obra;
    } catch (error) {
      console.error('Obra não encontrada', error);
      throw error;
    }
  }
}

export { GetObraService };
