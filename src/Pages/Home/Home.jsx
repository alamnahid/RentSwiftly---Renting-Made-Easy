import AboutUs from "./AboutUs/AboutUs";
import Banner from "./Banner/Banner";
import GoogleMapForService from "./GoogleMap/GoogleMapForService";
import OurTeam from "./OurTeam/OurTeam";
import Reviews from "./Reviews/Reviews";
import TopApartments from "./TopApartments/TopApartments";


const Home = () => {
    return (
        <div>
            <Banner/>
            <TopApartments/>
            <AboutUs/>
            <OurTeam/>
            <GoogleMapForService/>
            <Reviews/>
            
        </div>
    );
};

export default Home;