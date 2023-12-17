import cardtestimage from "../../../assets/images/cardimage.png"
import house from "../../../assets/icons/building.svg"
import location from "../../../assets/icons/location1.svg"

const AvailableHouseDetailsCard = () => {
    return (
        <div className="w-[60vw]">

                <img className="mt-10 w-full h-[33rem] rounded-t-2xl shadow-md" src={cardtestimage} alt="" />

                <div className="mt-12 flex justify-evenly items-center">
                    <div className="flex gap-6 items-center">
                        <img src={house} alt="" />
                        <h1 className="text-[#141B2D] merrin font-semibold text-[1.4rem]">3 Room</h1>
                    </div>
                    <div className="flex gap-6 items-center">

                        <h1 className="text-[#141B2D] merrin font-semibold text-[1.4rem]">$3000</h1>
                    </div>
                    <div className="flex gap-6 items-center">
                        <img src={location} alt="" />
                        <h1 className="text-[#141B2D] merrin font-semibold text-[1.4rem]">Dhaka</h1>
                    </div>
                </div>

                <p className="text-[#141B2D] sans pr-8 mt-20">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia saepe incidunt earum doloremque recusandae deleniti possimus! Architecto, sint consequuntur sed, nesciunt rerum esse aspernatur corrupti dolore totam quam qui, ea temporibus libero reprehenderit! Incidunt tempora, perspiciatis eligendi iste consectetur sint minus iure, eum in, quos ad excepturi! Repellendus, nihil architecto?
                </p>

                <div className="overflow-hidden hover:shadow-lg hover:shadow-[#1C3988] mt-20 max-w-full w-full md:min-w-[50vw] h-[500px]">

                    <div id="gmap-canvas" className="h-full w-full max-w-full">

                        <iframe className="h-full w-full border-0" frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=Dhaka,+Bangladesh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe></div><a className="google-maps-html" rel="nofollow" href="https://www.bootstrapskins.com/themes" id="grab-map-authorization">premium bootstrap themes</a><style>
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