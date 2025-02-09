import { DateTime } from "luxon";
import { TimeConversionRequest, TimeConversionResponse } from "../types/timeTypes";

export class TimeService {
  static convertirHorario(params: TimeConversionRequest): TimeConversionResponse {
    const { hora, rango, zonaOrigen, zonaDestino } = params;

    if (!zonaOrigen || !zonaDestino) {
      throw new Error("Las zonas horarias son obligatorias.");
    }

    const timeOrigen = DateTime.fromFormat(hora || "00:00", "HH:mm", { zone: zonaOrigen });
    const timeDestino = timeOrigen.setZone(zonaDestino);
    const diferencia_horas = (timeDestino.offset - timeOrigen.offset) / 60;

    if (hora) {
      const timeOrigen = DateTime.fromFormat(hora, "HH:mm", { zone: zonaOrigen });
      const timeDestino = timeOrigen.setZone(zonaDestino);

      return {
        hora_origen: hora,
        zona_origen: zonaOrigen,
        hora_destino: timeDestino.toFormat("HH:mm"),
        zona_destino: zonaDestino,
        diferencia_horas: (diferencia_horas >= 0 ? "+" : "") + diferencia_horas,
      };
    }

    if (rango) {
      const [inicio, fin] = rango.split("-");
      const inicioOrigen = DateTime.fromFormat(inicio, "HH:mm", { zone: zonaOrigen });
      const finOrigen = DateTime.fromFormat(fin, "HH:mm", { zone: zonaOrigen });

      const inicioDestino = inicioOrigen.setZone(zonaDestino);
      const finDestino = finOrigen.setZone(zonaDestino);

      return {
        rango_origen: rango,
        zona_origen: zonaOrigen,
        rango_destino: `${inicioDestino.toFormat("HH:mm")}-${finDestino.toFormat("HH:mm")}`,
        zona_destino: zonaDestino,
        diferencia_horas: (diferencia_horas >= 0 ? "+" : "") + diferencia_horas,
      };
    }

    throw new Error("Debes proporcionar una hora o un rango.");
  }
}