import express from 'express';
import { apiRoutes } from "./routes/api.js";

const app = express();
const port = 3030;

app.use(express.json());
apiRoutes(app);

app.listen(port, () => {
  console.log(`Server lytter på port ${port}`);
});
