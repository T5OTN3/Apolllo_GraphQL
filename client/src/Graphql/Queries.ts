import { gql } from "@apollo/client";

export const Get_All_Books = gql`
query{
    getAllBooks{
      _id
      title
      image
      price
    }
  }
`;

export const Get_Books_By_Id = gql`
query getBookById($id: String) {
    getBookById(_id: $id){
      title
      image
      price
    }
}
`;

