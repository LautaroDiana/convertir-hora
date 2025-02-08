export interface TimeConversionRequest {
  hora?: string;
  rango?: string;
  zonaOrigen: string;
  zonaDestino: string;
}

export interface TimeConversionResponse {
  hora_origen?: string;
  rango_origen?: string;
  zona_origen: string;
  hora_destino?: string;
  rango_destino?: string;
  zona_destino: string;
  diferencia_horas: string;
}