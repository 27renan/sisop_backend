import { Request, Response } from 'express';
import { DeleteObraService } from '../../services/obras/DeleteObraService';

class DeleteObraController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({
        error: 'ID da obra não informado ou inválido',
      });
    }

    try {
      const deleteObraService = new DeleteObraService();
      const obra = await deleteObraService.execute(id);

      return res.status(200).json(obra);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: 'Erro ao deletar obra',
      });
    }
  }
}

export { DeleteObraController };
