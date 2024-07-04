import Banner from "../Banner/Banner";
import Navber from "../Navber/Navber";

const Home = () => {
    return (
        <div className="max-w-[1440px] mx-auto">
           <Navber></Navber> 
           <Banner></Banner>
        </div>
    );
};

export default Home;