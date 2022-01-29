import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './schema';
import cors from 'cors';
import { initDB } from './db';

const main = async () => {
    initDB();

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }));



    app.listen(4001, () => {
        console.log("Server running on port 4001")
    });
}

main().catch((err) =>{
    console.log(err)
})