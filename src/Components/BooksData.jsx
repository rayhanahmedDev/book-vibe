import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const BooksData = ({ book }) => {

    const { _id, img, title, } = book;

    return (
        <Link to={`/books/${_id}`}>
            <div className="card bg-base-100 border cursor-pointer">
                <figure className="pt-10 bg-base-200 m-5 rounded-xl">
                    <img
                        src={img}
                        alt=""
                        className="px-12 pb-8" />
                </figure>
                <div className="flex">
                    <p className="text-[#23BE0A] bg-[#F4FCF3] max-w-[120px] text-center ml-5 rounded-full p-1 px-4 text-[16px] font-medium">Young Adult</p>
                    <p className="text-[#23BE0A] bg-[#F4FCF3] max-w-[120px] text-center ml-3 rounded-full p-1 px-4 text-[16px] font-medium">Identity</p>
                </div>
                <div className="px-8 pb-5">
                    <h2 className="card-title mt-4 mb-2">{title}</h2>
                    <p className="border-b-2 border-dashed pb-4">By : Awlad Hossain</p>
                </div>
                <div className="flex justify-between px-8 pb-8">
                    <p>Fiction</p>
                    <p className="flex items-center gap-2">5.00 <FaRegStar /></p>
                </div>
            </div>
        </Link>
    );
};

export default BooksData;