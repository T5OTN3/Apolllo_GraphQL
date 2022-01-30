import React from "react";
import { Link } from "react-router-dom";


interface BookCardProp {
    id: string;
    title: string;
    price: string;
    image: string;
  }

function BookCard({ id, title, price, image }: BookCardProp){


    return(
    <>
        <div key={id} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
                <Link to={`/book/${id}`}>
                    <img src={image} alt={title}/>
                </Link>
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <Link to={`/book/${id}`} className="block mt-2">
                        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                    </Link>
                    <p className="mt-3 text-base text-gray-500">{price}</p>
                </div>
            </div>
        </div>

    </>

    )
}

export default BookCard;