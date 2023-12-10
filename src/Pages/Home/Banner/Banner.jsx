import BannerContents from "./BannerContents";
import homeimage from "../../../assets/images/home1.jpg"
const Banner = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row justify-evenly items-center min-h-[90vh]">
            <BannerContents/>
            <div className="w-[300px] md:w-auto"> 
                <img className="w-[38rem]" src={homeimage} alt="" />
            </div>

            
        </div>
    );
};

export default Banner;