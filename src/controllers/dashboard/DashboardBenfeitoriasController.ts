import { Request, Response } from 'express';
import { DashboardBenfeitoriasService } from '../../services/dashboard/DashboardBenfeitoriasService';

class DashboardBenfeitoriasController {
  async handle(req: Request, res: Response) {
    const dashboardBenfeitoriasService = new DashboardBenfeitoriasService();
    const benfeitorias = await dashboardBenfeitoriasService.execute();

    res.json(benfeitorias);
  }
}

export { DashboardBenfeitoriasController };
