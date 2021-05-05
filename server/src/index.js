import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

app.use(routes);

app.listen(3001, () => console.log("server started"));
