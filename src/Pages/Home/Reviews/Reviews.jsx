import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    return (
        <div className="my-20 ml-[10%]">
            <h1 className="text-[#091638] text-[3.2425rem] font-semibold merrin ">Voices of Satisfaction</h1>
            <p className="text-[#091638] text-[1.2rem] w-[70vw]">Discover what our valued clients are saying about their experiences with Emilys Realty. Explore firsthand accounts of seamless relocations, personalized attention, and the exceptional service that sets us apart. Your dream home journey begins with the stories of those who found their perfect match with us.</p>


            <div>
                <div className='mt-4'>

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
                                slidesPerView: 1, // 2 slides per view on tablets
                            },
                            1024: {
                                slidesPerView: 2.5, // 4 slides per view on desktop devices
                            },
                        }}

                    >
                        <SwiperSlide className='pb-12'>
                            <ReviewCard review={'Emily Davis, CEO at Emilys Realty, orchestrated an impeccable relocation for us. Her hands-on approach and commitment to excellence ensured a seamless and stress-free process. Highly recommended for those seeking top-notch service and personalized attention.'} name={'John Thompson'} designation={'IT Professional'} />
                        </SwiperSlide>
                        <SwiperSlide className='pb-12'>
                            <ReviewCard review={'Working with Alex Johnson, COO at Emilys Realty, was a delight. His meticulous attention to detail and unwavering dedication made our entire journey smooth and truly impressive. A professional who goes above and beyond!'} name={'Laura Reynolds'} designation={'Marketing Manager'}/>
                        </SwiperSlide>
                        <SwiperSlide className='pb-12'>
                            <ReviewCard review={'Sophia Chen, Lead Developer at Emilys Realty, is a true expert in her field. The customization process for our dream home was nothing short of remarkable, thanks to her skills and dedication. A fantastic experience overall.'} name={'David Martinez'} designation={'Software Engineer'}/>
                        </SwiperSlide>
                        <SwiperSlide className='pb-12'>
                            <ReviewCard review={'Marcus Rodriguez, Creative Director at Emilys Realty, brought unparalleled elegance to our living space. His creative vision turned our home into a masterpiece. Working with Marcus was a true pleasure, and I highly recommend his expertise'}  name={'Emma Carter'} designation={'Interior Designer'}/>
                        </SwiperSlide>
                        <SwiperSlide className='pb-12'>
                            <ReviewCard review={'Aisha Patel, Customer Experience Manager at Emilys Realty, is exceptional. Her commitment to ensuring customer satisfaction is evident in every interaction. Emilys Realty stands out for its dedication to excellence, thanks to professionals like Aisha.'} name={'Ryan Anderson'} designation={'Sales Executive'} />
                        </SwiperSlide>

                    </Swiper>

                </div>
            </div>

        </div>
    );
};

export default Reviews;