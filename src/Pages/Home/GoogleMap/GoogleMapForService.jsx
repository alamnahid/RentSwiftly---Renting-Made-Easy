

const GoogleMapForService = () => {
    return (
        <div className="mx-[10%] my-20 flex flex-col lg:flex-row justify-evenly  gap-4">

        <div>
        <h1 className="text-[#091638] merrin text-2xl lg:text-[3.2rem] font-semibold">Service Area</h1>
            <p className="text-[#091638] mt-8 lg:text-[1.2rem] sans">Explore our expansive service area on the interactive map below, designed to seamlessly guide you through the locations we proudly serve. From city centers to suburban retreats, our commitment to providing exceptional service extends far and wide.</p>
        </div>

            <div className="overflow-hidden hover:shadow-lg hover:shadow-[#1C3988] max-w-full w-full md:min-w-[50vw] h-[500px]">

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

export default GoogleMapForService;