import { Request, Response } from 'express';
import { SessionUserService } from '../../services/user/sessionUserService';

class SessionUserController {
  async handle(req: Request, res: Response) {
    const { email, senha } = req.body;

    const sessionUserService = new SessionUserService();
    const user = await sessionUserService.execute({ email: email, senha: senha });

    res.json(user);
  }
}

export { SessionUserController };
