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
const csv_parser_1 = __importDefault(require("csv-parser"));
const fs_1 = __importDefault(require("fs"));
const booksSchema_1 = __importDefault(require("../modal/booksSchema"));
const results = [];
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        fs_1.default.createReadStream("outputFile.csv")
            .pipe((0, csv_parser_1.default)())
            .on("data", (data) => results.push(data))
            .on("end", () => __awaiter(this, void 0, void 0, function* () {
            const count = yield booksSchema_1.default.countDocuments();
            if (count === 0) {
                booksSchema_1.default.insertMany(results);
                console.log(`data saved`);
            }
            else {
                console.log(`data is not saved`);
            }
        }));
    });
}
exports.default = insertData;
