import express from "express";
import cors from "cors";
import { router } from "./pokemons/pokemons.routes";

const app = express();
const port = process.env.PORT || 3333;
const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(router);

app.listen(port, () => console.log(`Server is running on port ${port}🚀`));

export { app };
