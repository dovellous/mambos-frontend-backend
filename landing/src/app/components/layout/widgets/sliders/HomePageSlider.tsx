import React, {useState} from "react";

export const HomePageSlider:React.FunctionComponent = () : any | null => {
    
    const  [slides, setSlides] = useState<any>([1,2,3,4,5]);

  return (
    <>
    
        <section className="hero-slide-wrapper techex-landing-page">
            
            <div className="hero-slider-active-2 owl-carousel owl-theme">
                
                {slides.map((slide:any, slideIndex:number)=>(
                
                <div className="single-slide bg-cover"
                     style={{backgroundImage: "url('/assets/elements/banners/banner-home-slider-1.png')" }} >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="hero-contents text-center">
                                    <a className="theme-btn-sm" data-animation="fadeInUp" data-delay="0">we are
                                        creative it service agency</a>
                                    <h1 data-animation="fadeInUp" data-delay="0.4s">Preparing For Your Success Best IT
                                        Solutions</h1>
                                    <div data-animation="fadeInUp" data-delay="0.6s">
                                        <p>Sed ut perspiciatis unde omnis natus error sit voluptatem accusa ntium
                                            doloremque laudantium totam rem aperiamea</p>
                                    </div>
                                
                                    <div className="btn__wrapper d-flex flex-wrap justify-content-center"
                                         data-animation="fadeInUp" data-delay="0.8s">
                                        <a href="#" className="theme-btn">Service We Provide <i
                                            className="icon-arrow-right-1"></i></a>
                                        <a href="#" className="theme-btn">learn more <i
                                            className="icon-arrow-right-1"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                ))}
                
            </div>
        </section>

    </>
  );
  
};
