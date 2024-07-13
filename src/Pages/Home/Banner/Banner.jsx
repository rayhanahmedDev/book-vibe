import img from '../../../assets/pngwing 1.png'
const Banner = () => {
    return (
        <div className='flex items-center bg-base-200 rounded-3xl md:p-16 mt-16'>
            <div className="md:w-3/4 md:ml-12">
                <h1 className="text-6xl font-bold w-3/4">Books to freshen up your bookshelf</h1>
                <button className="mr-5 mt-12 py-4 px-7 text-[20px] rounded-lg bg-[#23BE0A] text-white font-semibold">View The List</button>
            </div>
            <div className='md:w-1/3'>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Banner;