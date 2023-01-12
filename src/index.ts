import express, { Request, Response } from "express";
import cors from "cors";

import services from "./services";

const PORT = process.env.PORT || 443;

const app = express();
const options: cors.CorsOptions = {
  optionsSuccessStatus: 200,
  origin: "*"
}

// Middlewares
app.use(express.json());
app.use(cors(options));

// Routes
app.get("/api/:time", (request: Request, response: Response) => {
  return response.json(services.getTimesResponse(request.params.time));
})

app.get("/api", (request: Request, response: Response) => {
  return response.json(services.getCurrentTimeResponse());
})

app.listen(PORT, () => {
  console.log(`Serve listen at: [${PORT}]`)
})