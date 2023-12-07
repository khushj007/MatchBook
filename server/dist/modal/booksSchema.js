"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const bookSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "provide name"],
    },
    yop: {
        type: Number,
        required: [true, "provide year of publish"],
    },
    image: {
        type: String,
        required: [true, "provide image"],
    },
    catagory: {
        type: Number,
        required: [true, "provide catagory"],
    },
});
const books = mongoose_1.default.model("book", bookSchema);
exports.default = books;
