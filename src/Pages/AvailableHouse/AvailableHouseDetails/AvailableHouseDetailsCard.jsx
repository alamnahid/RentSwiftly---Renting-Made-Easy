
import house from "../../../assets/icons/building.svg"
import location from "../../../assets/icons/location1.svg"

const AvailableHouseDetailsCard = ({data}) => {
    return (
        <div className="lg:w-[60vw]">

                <img className="mt-10 w-full lg:h-[33rem] rounded-t-2xl shadow-md" src={data?.image} alt="" />

                <div className="mt-12 flex justify-evenly items-center">
                    <div className="flex gap-6 items-center">
                        <img src={house} alt="" />
                        <h1 className="text-[#141B2D] merrin font-semibold md:text-[1.4rem]">{data?.roomsno} Room</h1>
                    </div>
                    <div className="flex gap-6 items-center">

                        <h1 className="text-[#141B2D] merrin font-semibold md:text-[1.4rem]">${data?.price}</h1>
                    </div>
                    <div className="flex gap-6 items-center">
                        <img src={location} alt="" />
                        <h1 className="text-[#141B2D] merrin font-semibold md:text-[1.4rem]">{data?.location}</h1>
                    </div>
                </div>

                <p className="text-[#141B2D] sans pr-8 mt-20">
                    {data?.description}
                </p>

                <div className="overflow-hidden hover:shadow-lg hover:shadow-[#1C3988] mt-20 max-w-full w-full md:min-w-[50vw] h-[500px]">

                    <div id="gmap-canvas" className="h-full w-full max-w-full">

                        <iframe className="h-full w-full border-0" frameBorder="0" src={`https://www.google.com/maps/embed/v1/place?q=Dhaka,+${data?.location}&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8`}></iframe></div><a className="google-maps-html" rel="nofollow" href="https://www.bootstrapskins.com/themes" id="grab-map-authorization">premium bootstrap themes</a><style>
                        {`
          #gmap-canvas img.text-marker {
            max-width: none !important;
            background: none !important;
          }
          img {
            max-width: none;
          }
        `}
                    </style></div>




            </div>
    );
};

export default AvailableHouseDetailsCard;