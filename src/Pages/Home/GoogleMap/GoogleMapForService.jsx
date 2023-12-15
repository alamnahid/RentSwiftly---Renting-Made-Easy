

const GoogleMapForService = () => {
    return (
        <div>
            <div className="overflow-hidden max-w-full w-full md:max-w-[1000px] h-[500px]">

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