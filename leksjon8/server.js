import express from 'express';
import { routes } from "./routes/index.js";

const app = express();
const port = 3030;

app.use(express.json());
routes(app);

app.listen(port, () => {
  console.log(`Server lytter på port ${port}`);
});
