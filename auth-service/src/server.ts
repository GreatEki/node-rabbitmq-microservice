import express, { Request, Response } from "express";
import path from "path";
import dotenv from "dotenv";
import connectAuthDB from "./config/database";
import router from "./router";

const app = express();

app.use(express.json());

dotenv.config({ path: path.resolve(__dirname, "./config/config.env") });

connectAuthDB();

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Welcome to the Auth Service Api",
  });
});

app.use("/auth-service/api", router);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Auth-Service listening on PORT ${PORT}`));
