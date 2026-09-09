import { Request, Response } from 'express';
import { CreateObrasService } from '../../services/obras/CreateObrasService';

class CreateObrasController {
  async handle(req: Request, res: Response) {
    const obra = req.body;

    const createObrasService = new CreateObrasService();
    const obras = await createObrasService.execute(obra);

    return res.json(obras);
  }
}

export { CreateObrasController };
