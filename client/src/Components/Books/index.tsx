import React from "react";
import { Get_All_Books } from '../../Graphql/Queries';
import { useQuery } from '@apollo/client'

interface IBooks {
    id: string,
    title: string;
    image: string;
    price: string;
}

function BooksList(){

    const { data } = useQuery(Get_All_Books);

    return (
        <>
        {
            data && data.getAllBooks.map((book: IBooks) => {
                return (
                    <>
                        <div>{book.title}</div>
                        <div>{book.price}</div>
                        <div>{book.image}</div>
                    </>
                )
            })
        }
        </>
    )
}

export default BooksList