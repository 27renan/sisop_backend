import { Request, Response } from 'express';
import { DashboardTerrenosService } from '../../services/dashboard/DashboardTerrenosService';

class DashboardTerrenosController {
  async handle(req: Request, res: Response) {
    const dashboardTerrenosService = new DashboardTerrenosService();
    const terrenos = await dashboardTerrenosService.execute();

    res.json(terrenos);
  }
}

export { DashboardTerrenosController };
