import { Request, Response } from 'express';
import { CreateUserService } from '../../services/user/CreateUserService';

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { nome, email, senha, role, cod_unidade } = req.body;

    const createUserService = new CreateUserService();
    const user = await createUserService.execute({
      nome: nome,
      email: email,
      senha: senha,
      role: role,
      cod_unidade: cod_unidade,
    });

    res.json(user);
  }
}

export { CreateUserController };
