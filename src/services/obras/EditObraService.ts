import { Obra } from '../../models/obra';
import prismaClient from '../../prisma/index';

class EditObraService {
  async execute({
    id,
    id_cipi,
    tipo_obra,
    nome,
    servico,
    empresa_contratada,
    descricao,
    om,
    estado,
    cidade,
    inicio_obra,
    final_obra,
    status,
  }: Obra) {
    try {
      if (!id) {
        throw new Error('ID da obra não informado');
      }

      const obraAtualizada = await prismaClient.obras.update({
        where: {
          id: id,
        },

        data: {
          id_cipi: id_cipi,
          tipo_obra: tipo_obra,
          nome: nome,
          servico: servico,
          empresa_contratada: empresa_contratada,
          descricao: descricao,
          om: om,
          estado: estado,
          cidade: cidade,
          inicio_obra: new Date(inicio_obra),
          final_obra: new Date(final_obra),
          status: status,
        },
      });

      return obraAtualizada;
    } catch (error) {
      console.error('Erro ao editar obra:', error);
      throw error;
    }
  }
}

export { EditObraService };
