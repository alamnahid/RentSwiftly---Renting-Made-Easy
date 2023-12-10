import reviewPerson from "../../../assets/images/reviewPerson.svg"

const OurTeamCard = () => {
    return (
        <div className="w-[21.875rem] h-[23.625rem] ml-8 rounded-md border-[1px] border-[#F3F3FA] shadow-lg hover:shadow-2xl hover:shadow-[#1C3988] flex flex-col justify-center items-center">
            <img className="w-[12.5rem] h-[12.5rem] rounded-[12.5rem]" src={reviewPerson} alt="" />
            <h1 className="text-[1.3rem] mt-6 merrin font-semibold text-[#091638]">Davis Carder</h1>
            <h1 className="text-[1rem] sans mt-1 text-[#091638]">Super duper position</h1>
            
        </div>
    );
};

export default OurTeamCard;