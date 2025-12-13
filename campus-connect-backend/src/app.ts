import express, {application} from "express";
import cors from "cors";
import { config } from "./config/config";

const app = express();

app.use(express.json());

app.use(cors({
  origin: config.frontendUrl, 
  credentials: true
}));

export default app;