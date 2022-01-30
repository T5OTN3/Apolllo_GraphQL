import React, { useEffect, useState } from "react";
import { Get_Books_By_Id } from '../../Graphql/Queries';
import { useQuery } from '@apollo/client'
import { useParams } from "react-router-dom";


interface IBooks {
    title: string;
    image: string;
    price: string;
}

function BookDetail(props:any){

    const [book, setBook] = useState<IBooks>();
    const { id } = useParams();
    const { data, loading, error } = useQuery(Get_Books_By_Id,{
        variables: { id: id }
    });

    useEffect(() => {
        if(loading === false && data){
            setBook(data.getBookById);
        }
    }, [loading, data])


    return(
<>
    <div className="bg-white mt-16">
      <div aria-hidden="true" className="relative">
        <img src={book?.image}/>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50" />{/* bg-gradient-to-t from-white */}
      </div>

      <div className="relative -mt-12 max-w-7xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:px-8">

        <div className="relative bg-white py-8 sm:py-12 lg:py-16">
          <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h1 className="mb-12 text-3xl font-extrabold text-center text-gray-800 tracking-tight sm:text-4xl">
              {book?.title}
            </h1>
            
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
            {book?.price}
            </p>

          </div>
        </div>


      </div>
    </div>
</>

    )
}

export default BookDetail;