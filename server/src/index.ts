import app from "./app";
import * as dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

(async () => {
  try {
    const connection = await mongoose.connect(process.env.DATABASE!);
    if (connection) {
      console.log("Databse is connected");
      app.listen(process.env.PORT, () => {
        console.log(`port working`);
      });
    }
  } catch (error: any) {
    console.log(`database connection error`, error.message);
  }
})();
