import { Request, Response, RequestHandler } from "express";
import { TimeService } from "../services/timeService";

export const convertirHorario: RequestHandler = (req: Request, res: Response) => {
  try {
    const { hora, rango, zonaOrigen, zonaDestino } = req.query;

    if (!zonaOrigen || !zonaDestino) {
      res.status(400).json({ error: "Los parámetros zonaOrigen y zonaDestino son obligatorios." });
      return;
    }

    const resultado = TimeService.convertirHorario({
      hora: hora as string,
      rango: rango as string,
      zonaOrigen: zonaOrigen as string,
      zonaDestino: zonaDestino as string,
    });

    res.json(resultado);
  } catch (error) {
    res.status(400).json({ error: (error as Error).message });
  }
};