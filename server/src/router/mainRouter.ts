import express from "express";
import { calculateSimilarity } from "../controller/calculateSimilarity";

const Router = express.Router();

Router.route("/check").post(calculateSimilarity);

export default Router;
