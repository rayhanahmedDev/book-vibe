import { useEffect, useState } from "react";
import BooksData from "../../../Components/BooksData";

const Books = () => {

    const [books, setBooks] = useState([])
    useEffect(() => {
        fetch('http://localhost:5001/books')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div className="mb-20">
            <h2 className="text-[40px] font-bold my-[36px] text-center">Books</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    books.map((book) => <BooksData key={book._id}
                    book={book}
                    ></BooksData>)
                }
            </div>
        </div>
    );
};

export default Books;