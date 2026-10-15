import { Request, Response } from 'express';
import { GetObraService } from '../../services/obras/GetObraService';

class GetObraController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    if (!id || Array.isArray(id)) {
      return res.status(400).json({
        error: 'ID da obra não informado ou inválido',
      });
    }

    try {
      const getObraService = new GetObraService();
      const obra = await getObraService.execute(id);

      return res.status(200).json(obra);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: 'Erro ao cadastrar obra',
      });
    }
  }
}

export { GetObraController };
