"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateSimilarity = void 0;
const booksSchema_1 = __importDefault(require("../modal/booksSchema"));
const compareVector_1 = __importDefault(require("../helpers/compareVector"));
function calculateSimilarity(req, res) {
    var _a;
    return __awaiter(this, void 0, void 0, function* () {
        const { name, catagory, yop, age } = req.body;
        let sCatagory = catagory === "poetry"
            ? 0
            : catagory === "history"
                ? 1
                : catagory === "businessAndeconomics"
                    ? 2
                    : 3;
        const user = [sCatagory, yop, age];
        const result = yield booksSchema_1.default.find({ catagory: sCatagory });
        let output = (0, compareVector_1.default)(user, result);
        output = (_a = output[Math.floor(output.length % name.length)]) !== null && _a !== void 0 ? _a : output[0];
        res.status(201).json({ data: output });
    });
}
exports.calculateSimilarity = calculateSimilarity;
