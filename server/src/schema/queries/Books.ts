import { GraphQLList, GraphQLID, GraphQLString } from "graphql";
import { BooksType } from "../typeDefs/Books";
import { BooksModel } from '../../models/books';
import { createClient } from 'redis';


interface IBooks {
    id: string,
    title: string;
    image: string;
    price: string;
}

async function runCache(): Promise<IBooks[]> {
    const redisClient = createClient();
  
    await redisClient.connect();
  
    const data = await redisClient.get("books"); 
    if(data != null){
        return JSON.parse(data);
    }else{
        const dataDB = await BooksModel.find();
        await redisClient.setEx("books", 3600, JSON.stringify(dataDB));
        await redisClient.disconnect();
        return <IBooks[]>dataDB;
    } 
}

export const Get_All_Books = {
    type: new GraphQLList(BooksType),
    async resolve() {
        return await runCache();
    }
}


export const Get_Books_By_ID = {
    type: BooksType,
    args: {
        _id: { type: GraphQLString },
    },
    async resolve(parent: any, args: any): Promise<IBooks> {
        return <IBooks> await BooksModel.findById(args._id);
    }
}
