import express, { RequestHandler } from "express";
import { convertirHorario } from "../controllers/timeController";

const router = express.Router();

router.get("/convertir-horario", convertirHorario);

export default router;