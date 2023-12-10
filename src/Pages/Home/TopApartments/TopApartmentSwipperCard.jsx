import image from "../../../assets/images/cardimage.png"

const TopApartmentSwipperCard = () => {
    return (
        <div className="w-[21.875rem] h-[26.25rem] rounded-md shadow-md hover:shadow-2xl hover:shadow-[#1C3988] hover:cursor-grab bg-white">
            <img className="w-[21.875rem] rounded-t-md h-[15.5625rem]" src={image} alt="" />
            <h1 className="text-[#141B2D] text-[1.32rem] font-semibold px-5 mt-6 merrin">Large 4-room apartment with a beautiful terrace</h1>

            <div className="flex mt-4 justify-between items-center pr-5">
                <div>
                    <p className="text-[#1C3988] text-lg sans font-semibold pl-5">$320</p>
                    <p className=" text-[#141B2D] sans pl-5">Daka, Bangladesh</p>
                </div>
                <button className="btn btn-outline border-[#1C3988] text-lg border-2">See Details</button>
            </div>

        </div>
    );
};

export default TopApartmentSwipperCard;