import React, {useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export const ExperiencePageSlider:React.FunctionComponent = () : any | null => {
    
    const  [slides, setSlides] = useState<any>([1,2,3,4,5]);

  return (
    <>
    
        <section className="hero-slide-wrapper techex-landing-page">

            <Swiper autoplay={true} navigation={true} pagination={true}
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                
                {slides.map((slide:any, slideIndex:number)=>(
                    <SwiperSlide>
                        <div className="single-slide bg-cover" key={slideIndex}
                            style={{backgroundImage: "url('/assets/mbs/mambos-exp-top-bg.png')" }} >
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="hero-contents text-center" style={{minHeight: '880px'}}>
                                             
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>

        </section>

    </>
  );
  
};
