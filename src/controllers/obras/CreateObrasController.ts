import { Request, Response } from 'express';
import { CreateObrasService } from '../../services/obras/CreateObrasService';
import { Obra } from '../../models/obra';

class CreateObrasController {
  async handle(req: Request, res: Response) {
    try {
      const obra: Obra = req.body;

      const service = new CreateObrasService();

      const novaObra = await service.execute(obra);

      return res.status(201).json(novaObra);
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        error: 'Erro ao cadastrar obra',
      });
    }
  }
}

export { CreateObrasController };
