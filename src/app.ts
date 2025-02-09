import express from "express";
import timeRoutes from "./routes/timeRoutes";

const app = express();
app.use(express.json());
app.use("/api", timeRoutes);

export default app;