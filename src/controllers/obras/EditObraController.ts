import { Request, Response } from 'express';
import { EditObraService } from '../../services/obras/EditObraService';

class EditObraController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({
        error: 'ID da obra não informado ou inválido',
      });
    }

    try {
      const {
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
      } = req.body;

      const editObraService = new EditObraService();

      const updatedObra = await editObraService.execute({
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
      });

      return res.status(200).json(updatedObra);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: 'Erro ao editar uma obra',
      });
    }
  }
}

export { EditObraController };
