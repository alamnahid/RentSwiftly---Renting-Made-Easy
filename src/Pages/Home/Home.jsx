import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import OurTeam from "./OurTeam/OurTeam";
import TopApartments from "./TopApartments/TopApartments";


const Home = () => {
    return (
        <div>
            <Banner/>
            <TopApartments/>
            <AboutUs/>
            <OurTeam/>
            
        </div>
    );
};

export default Home;