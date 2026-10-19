import prismaClient from '../../prisma';

class DeleteObraService {
  async execute(id: string) {
    try {
      const obra = await prismaClient.obras.delete({
        where: {
          id: id,
        },
      });

      return obra;
    } catch (error) {
      console.error('Erro ao deletar obra', error);
      throw error;
    }
  }
}

export { DeleteObraService };
