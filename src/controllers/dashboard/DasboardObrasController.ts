import { Request, Response } from 'express';
import { DashboardObrasService } from '../../services/dashboard/DashboardObrasService';

class DashboardObrasController {
  async handle(req: Request, res: Response) {
    const dashboardObrasService = new DashboardObrasService();
    const obras = await dashboardObrasService.execute();

    res.json(obras);
  }
}

export { DashboardObrasController };
