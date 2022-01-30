import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';

export const BooksType = new GraphQLObjectType({
    name: "Books",
    fields: () => ({
        _id: { type: GraphQLID },
        image: { type: GraphQLString },
        title: { type: GraphQLString },
        price: { type: GraphQLString }
    })
});