import aboutusimage from "../../../assets/images/aboutus.png"
import AboutUsContent from "./AboutUsContent";

const AboutUs = () => {
    return (
        <div className="flex justify-evenly items-center">
            <img src={aboutusimage} alt="" />
            <AboutUsContent/>
        </div>
    );
};

export default AboutUs;