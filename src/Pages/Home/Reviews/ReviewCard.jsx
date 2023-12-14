

const ReviewCard = () => {
    return (
        <div className="w-[33.82rem] rounded-xl hover:shadow-lg hover:shadow-[#1C3988] h-[18.625rem] bg-[#F3F3FA] p-6">
            <div className="flex">
                <p className="text-[#37383ba0] merrin text-[4rem] font-semibold">“</p>
                <p className="text-[#091638] sans text-base mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique in pellentesque ultrices et massa neque, convallis lorem. Erat proin in posuere dui accumsan lorem. Diam nunc scelerisque mi vestibulum scelerisque mi ac nisi. Dictumst nunc placerat ultricies pretium.</p>
            </div>
            <div className="mt-6">
                <h1 className="text-[#091638] merrin font-semibold text-[1.3rem]">Emerson Aminoff</h1>
                <h6 className="text-[#091638] sans text-[1rem]">3 bedroom apartmentt in Madrid</h6>
            </div>
        </div>
    );
};

export default ReviewCard;