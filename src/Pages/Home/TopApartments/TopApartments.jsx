import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import TopApartmentSwipperCard from './TopApartmentSwipperCard';



const TopApartments = () => {
    return (
        <div className="h-[57rem] bg-[#F3F3FA]">
            <h1 className="text-[#091638] merrin text-[3.2rem] font-semibold">Top Apartments</h1>
            <p className="text-[#091638] text-[1.2rem] w-[38rem] sans">Fulfill your career dreams, enjoy all the achievements of the city center and luxury housing to the fullest.</p>

            <div className="flex">
            <div className="divider w-[80vw]"></div> 
            <button className="btn btn-outline border-[#1C3988] ml-4 text-lg border-2">Show All Apartment</button>
            </div>

            <div className='mt-20 px-[8%]'>
           
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mt-12"
                autoplay
                breakpoints={{
                    320: {
                      slidesPerView: 1, // 1 slide per view on small screens (mobile devices)
                    },
                    768: {
                      slidesPerView: 1.5, // 2 slides per view on tablets
                    },
                    1024: {
                      slidesPerView: 4, // 4 slides per view on desktop devices
                    },
                  }}

            >
                <SwiperSlide  className='pb-12'>
                   <TopApartmentSwipperCard/>
                </SwiperSlide>
                <SwiperSlide  className='pb-12'>
                    <h1>nahid alam</h1>
                </SwiperSlide>
                <SwiperSlide  className='pb-12'>
                    <h1>nahid alam</h1>
                </SwiperSlide>
                <SwiperSlide  className='pb-12'>
                    <h1>nahid alam</h1>
                </SwiperSlide>
                <SwiperSlide  className='pb-12'>
                    <h1>nahid alam</h1>
                </SwiperSlide>

            </Swiper>

        </div>
        </div>
    );
};

export default TopApartments;