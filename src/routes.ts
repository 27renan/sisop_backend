import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { validateSchema } from './middlewares/validateSchema';
import { authUserSchema, createUserSchema } from './schemas/userSchema';
import { SessionUserController } from './controllers/user/SessionController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

// Rotas de usuário
router.post('/users', validateSchema(createUserSchema), new CreateUserController().handle);

// Rota session (login)
router.post('/session', validateSchema(authUserSchema), new SessionUserController().handle);

// Rota para obter detalhes do usuário autenticado
router.get('/me', isAuthenticated, new DetailUserController().handle);
// demais rotas...

export { router };
