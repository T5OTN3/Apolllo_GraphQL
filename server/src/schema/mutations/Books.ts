import { GraphQLString } from "graphql";
import { BooksType } from "../typeDefs/Books";
import { BooksModel } from '../../models/books';

interface IBooks {
    id: string,
    title: string;
    image: string;
    price: string;
}

export const Add_Book = {
    type: BooksType,
    args: {
        image: { type: GraphQLString },
        title: { type: GraphQLString },
        price: { type: GraphQLString }
    },
    async resolve(parent: any, args: any): Promise<IBooks> {
        return <IBooks> await BooksModel.create(args);
    }
}