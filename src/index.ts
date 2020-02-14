import express from "express";

import shiftRoutes from './routes/shift';
import {db} from './services/db';

db.checkDb();
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.use("/shifts", shiftRoutes);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
