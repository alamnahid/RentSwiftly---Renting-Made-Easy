

const Footer = () => {
    return (
        <div>
            <div className="h-[25rem] bg-[#F3F3FA] w-full flex justify-evenly items-center">
                <div className="opacity-50">
                    <svg xmlns="http://www.w3.org/2000/svg" width="217" height="217" viewBox="0 0 217 217" fill="none">
                        <g clipPath="url(#clip0_22_1296)">
                            <path d="M208.715 0.348319C208.612 0.380954 208.504 0.336028 208.402 0.373749L4.964 76.6629C2.73508 77.5013 1.15844 79.5187 0.885069 81.8904C0.6117 84.2622 1.68611 86.5839 3.67259 87.9062L48.2734 117.636L64.5899 185.813C64.6327 185.992 64.7429 186.135 64.8001 186.307C66.2666 190.78 71.8988 192.2 75.2683 188.83L107.185 156.914L156.251 189.625C159.806 192.009 164.707 190.229 165.893 186.08L216.752 8.07217C218.118 3.28121 213.62 -1.22663 208.715 0.348319ZM80.055 129.664C79.0022 130.731 78.6852 131.595 78.316 132.939C78.3114 132.964 78.3004 132.988 78.2957 133.012L71.2017 158.807L61.0942 116.571L159.56 49.0543L80.055 129.664Z" fill="#1C3988" />
                            <path d="M42.6394 174.331C40.1562 171.848 36.1328 171.848 33.6496 174.331L1.86241 206.119C-0.620803 208.602 -0.620803 212.625 1.86241 215.108C4.34605 217.592 8.36861 217.592 10.8522 215.108L42.6394 183.321C45.1226 180.838 45.1226 176.815 42.6394 174.331Z" fill="#1C3988" />
                            <path d="M42.6394 136.187C40.1562 133.704 36.1328 133.703 33.6496 136.187L1.86241 167.974C-0.620803 170.457 -0.620803 174.481 1.86241 176.964C4.34605 179.448 8.36861 179.448 10.8522 176.964L42.6394 145.177C45.1226 142.694 45.1226 138.67 42.6394 136.187Z" fill="#1C3988" />
                        </g>
                        <defs>
                            <clipPath id="clip0_22_1296">
                                <rect width="217" height="217" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <div>
                    <h1 className="text-[#141B2D] lg:text-4xl font-semibold">Subscribe to newsletter</h1>
                    <p className="text-[#141B2D] mt-3 ">Get the latest news and interesting offers and real estate</p>

                    <div>
                        <input className="bg-[#FFFFFF] w-[16.5rem] h-12  pl-4 rounded-lg" placeholder="Your email address" type="email" name="email" />
                        <button className="btn ml-6 rounded-sm btn-outline border-2 border-[#1C3988] text-[#1C3988] font-bold mt-4">Subscribe</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;