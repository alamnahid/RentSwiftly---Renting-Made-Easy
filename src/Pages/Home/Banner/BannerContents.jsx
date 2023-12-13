import location from "../../../assets/icons/location.svg"
import searchicon from "../../../assets/icons/search icon.svg"

const BannerContents = () => {
    return (
        <div className="px-4 lg:px-0">
            <h1 className="text-[#091638] text-2xl lg:text-[4rem] font-semibold lg:w-[35rem] lg:leading-[5rem] merrin">Modern living for everyone</h1>

            <p className="text-[#091638] mt-2 sans lg:w-[39rem] lg:text-[1.32rem]">We are provide a complete service for the sale, purchase or rental of real estate. We have been operating in Madrid and Barcelona more than 15 years.</p>

            <div className="lg:w-[33rem] h-[6.5rem] rounded-xl bg-[#F3F3FA] mt-6 flex justify-center items-center">

               <div className="md:w-[19rem] h-[3.5rem] relative">
               <input className="md:w-[19rem] border-none outline-none h-[3.5rem] text-lg pl-10 bg-white shadow-sm rounded-sm" type="text" placeholder="Search from location" />
               <img className="absolute top-[1rem] left-4" src={location} alt="" />
               </div>

               <button className="btn border-none bg-[#1C3988] lg:w-[9.4rem] h-[3.5rem] text-base text-white ml-4 btn-neutral"><img src={searchicon} alt="" /> Register</button>

            </div>
            
        </div>
    );
};

export default BannerContents;