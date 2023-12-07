import csv from "csv-parser";
import fs from "fs";
import books from "../modal/booksSchema";

interface RESULT {
  name: string;
  yop: number;
  image: string;
  catagory: number;
}

const results: RESULT[] = [];

async function insertData() {
  fs.createReadStream("outputFile.csv")
    .pipe(csv())
    .on("data", (data) => results.push(data))
    .on("end", async () => {
      const count = await books.countDocuments();
      if (count === 0) {
        books.insertMany(results);
        console.log(`data saved`);
      } else {
        console.log(`data is not saved`);
      }
    });
}

export default insertData;
