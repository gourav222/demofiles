import express from "express";
import userRoutes from "./server/routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import messageRoutes from "./routes/messageRoute.js";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/v1", userRoutes);
app.use("/api/v1", chatRoutes);
app.use("/api/v1", messageRoutes);

export default app;
