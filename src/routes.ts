import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { validateSchema } from './middlewares/validateSchema';
import { authUserSchema, createUserSchema } from './schemas/userSchema';
import { SessionUserController } from './controllers/user/SessionController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';
import { DashboardObrasController } from './controllers/dashboard/DasboardObrasController';
import { DashboardTerrenosController } from './controllers/dashboard/DashboardTerrenosController';
import { DashboardBenfeitoriasController } from './controllers/dashboard/DashboardBenfeitoriasController';
import { CreateObrasController } from './controllers/obras/CreateObrasController';
import { GetObraController } from './controllers/obras/GetObraController';
import { EditObraController } from './controllers/obras/EditObraController';
import { DeleteObraController } from './controllers/obras/DeleteObraController';

const router = Router();

// Rotas de usuário
router.post('/users', validateSchema(createUserSchema), new CreateUserController().handle);

// Rota session (login)
router.post('/session', validateSchema(authUserSchema), new SessionUserController().handle);

// Rota para obter detalhes do usuário autenticado
router.get('/me', isAuthenticated, new DetailUserController().handle);

//Rota para obter obras cadastradas (dashboard)
router.get('/dashboard/obras', isAuthenticated, new DashboardObrasController().handle);

//Rota para obter terrenos cadastrados (dashboard)
router.get('/dashboard/terrenos', isAuthenticated, new DashboardTerrenosController().handle);

//Rota para obter todas as benfeitorias cadastradas (dashboard)
router.get('/dashboard/benfeitorias', isAuthenticated, new DashboardBenfeitoriasController().handle);

// Rota para cadastrar uma nova obra
router.post('/create/obra', isAuthenticated, new CreateObrasController().handle);

// Rota para retornar uma obra especifica pelo ID
router.get('/obra/:id', isAuthenticated, new GetObraController().handle);

// Rota para editar uma obra
router.put('/obra/:id', isAuthenticated, new EditObraController().handle);

// Rota para deletar uma obra
router.delete('/obra/:id', isAuthenticated, new DeleteObraController().handle);

// demais rotas...

export { router };
