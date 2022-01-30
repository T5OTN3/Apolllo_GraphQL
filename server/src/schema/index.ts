import { GraphQLObjectType, GraphQLSchema } from 'graphql';
import { Get_All_Books } from './queries/Books';
import { Get_Books_By_ID} from './queries/Books';
import { Add_Book } from './mutations/Books';

const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllBooks: Get_All_Books,
        getBookById: Get_Books_By_ID
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addBook: Add_Book
    }
});

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});