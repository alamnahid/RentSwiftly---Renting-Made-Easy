import BannerContents from "./BannerContents";
import homeimage from "../../../assets/images/home.png"
import dots from "../../../assets/images/dots.svg"
import housebg from "../../../assets/images/housebg.png"
const Banner = () => {
    return (
        <div className="flex justify-evenly items-center min-h-[80vh]">
            <BannerContents/>
            <div className="relative"> 
                <img className="" src={housebg} alt="" />
                <img className="absolute bottom-0 right-[7rem]" src={homeimage} alt="" />
                
            </div>

            
        </div>
    );
};

export default Banner;