import BannerContents from "./BannerContents";
import homeimage from "../../../assets/images/home.png"
import dots from "../../../assets/images/dots.svg"
import housebg from "../../../assets/images/housebg.png"
const Banner = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row justify-evenly items-center min-h-[80vh]">
            <BannerContents/>
            <div className="relative w-[300px] md:w-auto"> 
                <img className="md:w-auto" src={housebg} alt="" />
                <img className="absolute bottom-0 right-16 md:right-[7rem]" src={homeimage} alt="" />
                
            </div>

            
        </div>
    );
};

export default Banner;