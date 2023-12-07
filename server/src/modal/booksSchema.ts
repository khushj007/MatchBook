import mongoose from "mongoose";

interface BOOKS {
  name: string;
  yop: number;
  image: string;
  catagory: number;
}

const bookSchema = new mongoose.Schema<BOOKS>({
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

const books = mongoose.model<BOOKS>("book", bookSchema);

export default books;
