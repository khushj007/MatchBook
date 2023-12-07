import { Request, Response } from "express";
import books from "../modal/booksSchema";
import compareVectors from "../helpers/compareVector";

interface DATA {
  name: string;
  yop: number;
  catagory: string;
  age: number;
}

async function calculateSimilarity(req: Request, res: Response) {
  const { name, catagory, yop, age }: DATA = req.body;

  let sCatagory: number =
    catagory === "poetry"
      ? 0
      : catagory === "history"
      ? 1
      : catagory === "businessAndeconomics"
      ? 2
      : 3;

  const user = [sCatagory, yop, age];

  const result = await books.find({ catagory: sCatagory });
  let output = compareVectors(user, result);
  output = output[Math.floor(output.length % name.length)] ?? output[0];

  res.status(201).json({ data: output });
}

export { calculateSimilarity };
