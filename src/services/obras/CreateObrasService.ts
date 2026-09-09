import prismaClient from '../../prisma/index';

class CreateObrasService {
  async execute(obra: any) {
    try {
      const obras = await prismaClient.obras.create({
        data: obra,
      });
      return obras;
    } catch (error) {
      throw new Error('Erro ao cadastrar uma obra');
    }
  }
}

export { CreateObrasService };
