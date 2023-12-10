import image from "../../../assets/images/cardimage.png"

const TopApartmentSwipperCard = () => {
    return (
        <div className="w-[21.875rem] h-[26.25rem] rounded bg-white">
            <img className="w-[21.875rem] h-[15.5625rem]" src={image} alt="" />
            <h1>Large 4-room apartment with a beautiful terrace</h1>
            
        </div>
    );
};

export default TopApartmentSwipperCard;