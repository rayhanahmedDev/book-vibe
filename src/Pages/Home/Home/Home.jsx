import Banner from "../Banner/Banner";
import Books from "../Books/Books";
import Navber from "../Navber/Navber";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
           <Navber></Navber> 
           <Banner></Banner>
           <Books></Books>
        </div>
    );
};

export default Home;