import "dotenv/config";

import express from "express";
import { routes } from "./routes";

const app = express();
app.use(express.json())
app.use(routes)

/// http://localhost:4000/signin/callback
// http://localhost:4000/signin/callback?code=682697fb6281cd26d48b
app.listen(4000, () => console.log("Running on: http://localhost:4000/"))