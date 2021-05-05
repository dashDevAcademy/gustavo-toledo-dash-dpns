import { Router } from "express";
import * as controllers from "./controllers";

const routes = Router();

routes.get("/check", controllers.check);

export default routes;
