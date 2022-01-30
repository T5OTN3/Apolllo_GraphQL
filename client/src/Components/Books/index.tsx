import React,{ useState, useEffect } from "react";
import { Get_All_Books } from '../../Graphql/Queries';
import { useQuery } from '@apollo/client'
import BookCard from "./BookCard";

interface IBooks {
    _id: string,
    title: string;
    image: string;
    price: string;
}

function BooksList(){
    const { data, loading } = useQuery(Get_All_Books);
    const [books, setBooks] = useState<IBooks[]>([]);

    useEffect(() => {
        if(loading === false && data){
            setBooks(data.getAllBooks);
        }
    }, [loading, data])

    const searchPage = (e: React.ChangeEvent<HTMLInputElement>) => {
        const arr = data.getAllBooks.filter((el:IBooks) => el.title.toLowerCase().includes(e.target.value.toLowerCase()));
        setBooks(arr);
    }


    return (
    <>
    <div className="flex-1 flex flex-col">

    <main className="flex-1 overflow-y-auto focus:outline-none">
        <div className="relative ml-3 mr-3 mx-auto md:px-8 xl:px-0">
        <div className="pt-10 pb-16">
            <div className="px-4 sm:px-6 md:px-0">
            <h1 className="text-3xl font-extrabold text-gray-900">Books</h1>
            </div>
            <div className="px-4 sm:px-6 md:px-0">
            <div className="py-6">

                {/* Description list with inline editing */}
                <div className="mt-1 divide-y divide-gray-200">

                <div className="w-full max-w-4xl mx-auto md:px-8 xl:px-0">
                    <div className="relative z-10 flex-shrink-0 h-16 bg-white border-gray-200 flex">
                        <div className="flex-1 flex justify-between px-4 md:px-0">
                            <div className="flex-1 flex">
                                <label htmlFor="desktop-search-field" className="sr-only">
                                    Search
                                </label>
                                <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                                        {/* <SearchIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" /> */}
                                    </div>
                                    <input
                                    name="desktop-search-field"
                                    id="desktop-search-field"
                                    className="hidden h-full w-full border-transparent py-2 pl-8 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent focus:placeholder-gray-400 sm:block"
                                    placeholder="Search Books"
                                    type="search"
                                    onChange={(e) => searchPage(e)}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
                    <div className="absolute inset-0">
                        <div className="bg-white h-full sm:h-full" />
                    </div>
                    <div className="relative max-w-7xl mx-auto">
                        <div className="mt-1 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                        {
                            books && books.map((book: IBooks) => {
                                return (<BookCard key={book._id} id={book._id} title={book.title} image={book.image} price={book.price} />) 
                            })
                        }
                        </div>
                    </div>
                </div>

                </div>

            </div>
            </div>
        </div>
        </div>
    </main>
    </div>
    </>
        
    )
}

export default BooksList;