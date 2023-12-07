import express, { Express, Request, Response } from "express";
import mainRouter from "./router/mainRouter";
import addBooksIntoDB from "./helpers/addBooksIntoDB";
import cors from "cors";
const app: Express = express();
app.use(express.json());
app.use(cors());

(async () => {
  await addBooksIntoDB();
})();

//routes

app.use("/api", mainRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("working");
});
export default app;
