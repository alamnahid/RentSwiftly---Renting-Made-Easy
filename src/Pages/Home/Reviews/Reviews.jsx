import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    return (
        <div className="my-20 mx-[10%]">
            <h1 className="text-[#091638] text-[3.2425rem] font-semibold merrin">References</h1>
            <p className="text-[#091638] text-[1.2rem]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus rutrum donec ultricies cras id ac.</p>


            <div>
                <div className='mt-20 lg:pl-[10%]'>

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
                                slidesPerView: 4.5, // 4 slides per view on desktop devices
                            },
                        }}

                    >
                        <SwiperSlide className='pb-12'>
                            <h1>nahid</h1>
                            <ReviewCard/>
                            {/* <TopApartmentSwipperCard /> */}
                        </SwiperSlide>
                        <SwiperSlide className='pb-12'>
                            {/* <TopApartmentSwipperCard /> */}
                        </SwiperSlide>
                        <SwiperSlide className='pb-12'>
                            {/* <TopApartmentSwipperCard /> */}
                        </SwiperSlide>
                        <SwiperSlide className='pb-12'>
                            {/* <TopApartmentSwipperCard /> */}
                        </SwiperSlide>
                        <SwiperSlide className='pb-12'>
                            {/* <TopApartmentSwipperCard /> */}
                        </SwiperSlide>

                    </Swiper>

                </div>
            </div>

        </div>
    );
};

export default Reviews;