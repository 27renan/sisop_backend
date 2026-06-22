import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { validateSchema } from './middlewares/validateSchema';
import { authUserSchema, createUserSchema } from './schemas/userSchema';
import { SessionUserController } from './controllers/user/SessionController';

const router = Router();

// Rotas de usuário
router.post('/users', validateSchema(createUserSchema), new CreateUserController().handle);

// Rota session (login)
router.post('/session', validateSchema(authUserSchema), new SessionUserController().handle);

export { router };
