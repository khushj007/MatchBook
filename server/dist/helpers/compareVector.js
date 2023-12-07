"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function VectorValue(user, result) {
    const value = ((user[0] - result[0]) ** 2 +
        (user[1] - result[1]) ** 2 +
        (user[2] - result[2]) ** 2) **
        0.5;
    return Math.floor(value);
}
function compareVectors(user, result) {
    let min = Number.MAX_VALUE;
    let random = Math.random();
    result.forEach((doc) => {
        const data = [
            doc.catagory,
            doc.yop,
            new Date().getFullYear() / (random * 2000),
        ];
        const value = VectorValue(user, data);
        if (min > value) {
            min = value;
        }
    });
    let output = [];
    result.forEach((doc) => {
        const data = [
            doc.catagory,
            doc.yop,
            new Date().getFullYear() / (random * 2000),
        ];
        const value = VectorValue(user, data);
        if (min === value) {
            output.push(doc);
        }
    });
    return output;
}
exports.default = compareVectors;
