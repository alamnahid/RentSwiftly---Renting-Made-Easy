import aboutusimage from "../../../assets/images/aboutus.png"
import AboutUsContent from "./AboutUsContent";

const AboutUs = () => {
    return (
        <div className="flex px-4 lg:px-0 flex-col lg:flex-row justify-evenly items-center">
            <img src={aboutusimage} alt="" />
            <AboutUsContent/>
        </div>
    );
};

export default AboutUs;