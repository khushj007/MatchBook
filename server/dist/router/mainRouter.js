"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const calculateSimilarity_1 = require("../controller/calculateSimilarity");
const Router = express_1.default.Router();
Router.route("/check").post(calculateSimilarity_1.calculateSimilarity);
exports.default = Router;
