import express from "express"; 
import cors from "cors";

import mainRouter from "./router/main.router.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use(mainRouter);

app.listen(PORT, () => {
    console.log("App running in", PORT);
});

