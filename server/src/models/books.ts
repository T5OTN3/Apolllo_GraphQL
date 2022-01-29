import { Schema, model } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface Books {
  title: string;
  image: string;
  price: string;
}

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<Books>({
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true }
});

// 3. Create a Model.
export const BooksModel = model<Books>('Books', schema);