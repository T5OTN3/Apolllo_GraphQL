import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export const BooksType = new GraphQLObjectType({
    name: "Books",
    fields: () => ({
        id: { type: GraphQLID },
        image: { type: GraphQLString },
        title: { type: GraphQLString },
        price: { type: GraphQLString }
    })
});