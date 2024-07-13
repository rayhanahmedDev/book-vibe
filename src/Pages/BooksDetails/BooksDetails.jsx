import { useLoaderData } from "react-router-dom";
import Navber from "../Home/Navber/Navber";

const BooksDetails = () => {
    const { img, title, review, pages, publisher, year, rating } = useLoaderData()
    return (
        <div className="max-w-[1170px] mx-auto">
            <Navber></Navber>
            <div className="bg-base-100 flex gap-12 mt-12 mb-[159px]">
                <figure className="w-1/2 p-[74px] bg-base-200 rounded-xl">
                    <img className="w-full lg:h-[564px]"
                        src={img}
                        alt="book" />
                </figure>
                <div className="w-1/2">
                    <h2 className="font-bold text-[40px]">{title}</h2>
                    <p className="border-b font-medium mt-4 pb-6 text-[20px]">By : Awlad Hossain</p>
                    <p className="border-b py-4 font-medium mb-6 text-[20px]">Fiction</p>
                    <p><span className="text-base font-bold text-[]">Review : </span>{review}</p>
                    <p>Id neque neque pretium enim platea urna non dictum. Faucibus dignissim ridiculus nibh tristique massa non.</p>

                    <div className="flex items-center mt-6 border-b pb-6">
                        <p className="text-base font-bold">Tag</p>
                        <p className="text-[#23BE0A] bg-[#F4FCF3] max-w-[130px] text-center ml-5 rounded-full p-1 px-4 text-[16px] font-medium">#Young Adult</p>
                        <p className="text-[#23BE0A] bg-[#F4FCF3] max-w-[120px] text-center ml-3 rounded-full p-1 px-4 text-[16px] font-medium">#Identity</p>
                    </div>
                    <div className="flex items-center gap-14 mt-6">
                        <div className="space-y-3">
                            <p>Number of Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating</p>
                        </div>
                        <div className="space-y-3">
                            <p className="text-base font-semibold">{pages}</p>
                            <p className="text-base font-semibold">{publisher}</p>
                            <p className="text-base font-semibold">{year}</p>
                            <p className="text-base font-semibold">{rating}</p>
                        </div>
                    </div>
                    <div className="flex gap-4 mt-8">
                        <button className="p-3 px-6 rounded-lg border-2 font-semibold text-[18px]">Read</button>
                        <button className="p-3 px-6 rounded-lg bg-[#59C6D2] text-white font-semibold text-[18px]">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksDetails;