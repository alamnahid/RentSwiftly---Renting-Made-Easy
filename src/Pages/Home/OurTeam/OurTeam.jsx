import OurTeamCard from "./OurTeamCard";
import Marquee from "react-fast-marquee";
import team1 from "../../../assets/images/Md. Nahid Alam.jpg"
import team2 from "../../../assets/images/team2.webp"
import team3 from "../../../assets/images/team3.jpg"
import team4 from "../../../assets/images/team4.png"
import team5 from "../../../assets/images/team5.avif"

const OurTeam = () => {
    return (
        <div className="my-32">
            <div className=" flex xl:hidden flex-col justify-center items-center mb-10">
                <h1 className="text-[#091638] merrin text-[3.2rem] font-semibold">Our Team</h1>
                <p className="text-[#091638] mt-3 text-[1rem] w-[22rem] text-center mx-auto">Discover the strength, creativity, and commitment that define Our Team – the driving force behind RentSwiftly, shaping innovation and success together.</p>
            </div>


            <div className=" xl:mx-[10%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center items-center gap-8">
            <Marquee className="col-span-3">
                <OurTeamCard name={'Nahid Alam'} designation={'Founder & CEO'} image={team1} />
                <OurTeamCard name={'Alex Johnson'} designation={'Chief Operations Officer'} image={team2} />
                <OurTeamCard name={'Sophia Chen'} designation={'Lead Developer'} image={team3} />
                <OurTeamCard name={'Marcus Rodriguez'} designation={'Creative Director'} image={team4} />
                <OurTeamCard name={'Aisha Patel'} designation={'Customer Experience Manager'} image={team5} />
            </Marquee>


            <div className="w-[21.875rem] h-[23.625rem] hidden xl:flex flex-col justify-center items-center">
                <h1 className="text-[#091638] merrin text-[3.2rem] font-semibold">Our Team</h1>
                <p className="text-[#091638] mt-3 text-[1rem] w-[22rem] text-center mx-auto">Discover the strength, creativity, and commitment that define Our Team – the driving force behind RentSwiftly, shaping innovation and success together.</p>
            </div>


        </div>
        </div>
    );
};

export default OurTeam;