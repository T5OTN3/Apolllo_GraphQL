import { gql } from "@apollo/client";

export const Get_All_Books = gql`
    query getAllBooks {
        getAllBooks{
            id
            title
            price
            image
        }
    }
`;