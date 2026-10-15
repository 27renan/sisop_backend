import { Obra } from '../../models/obra';
import prismaClient from '../../prisma/index';

class CreateObrasService {
  async execute(obra: Obra) {
    try {
      const novaObra = await prismaClient.obras.create({
        data: {
          id_cipi: obra.id_cipi,
          tipo_obra: obra.tipo_obra,
          nome: obra.nome,
          servico: obra.servico,
          empresa_contratada: obra.empresa_contratada,
          descricao: obra.descricao,
          om: obra.om,
          estado: obra.estado,
          cidade: obra.cidade,
          inicio_obra: new Date(obra.inicio_obra),
          final_obra: new Date(obra.final_obra),
          status: obra.status,
        },
      });

      return novaObra;
    } catch (error) {
      console.error('Erro ao cadastrar obra:', error);
      throw error;
    }
  }
}

export { CreateObrasService };
