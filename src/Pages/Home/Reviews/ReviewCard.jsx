

const ReviewCard = ({review, name, designation}) => {
    return (
        <div className="w-[33.82rem] rounded-xl hover:shadow-lg hover:shadow-[#1C3988] h-[18.625rem] bg-[#F3F3FA] p-6">
            <div className="flex">
                <p className="text-[#37383ba0] merrin text-[4rem] font-semibold">“</p>
                <p className="text-[#091638] sans text-base mt-8">{review}</p>
            </div>
            <div className="mt-6">
                <h1 className="text-[#091638] merrin font-semibold text-[1.3rem]">{name}</h1>
                <h6 className="text-[#091638] sans text-[1rem]">{designation}</h6>
            </div>
        </div>
    );
};

export default ReviewCard;