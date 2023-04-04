import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth/provider/AuthProvider";
import {ExperiencePageSlider} from "../layout/widgets/sliders/ExperiencePageSlider";


type PageProps = {
    children?: React.ReactNode;
}

const Experience:React.FunctionComponent<PageProps> = ({ children, ...props}) : any | null => {

    const { user }: any = useAuth();

    const [experiences, setExperiences] = React.useState<any>([]);

    useEffect(() => {

        setExperiences([
            {
                title: 'Mambo\'s Gesture',
                img: 'ico-mambos-gesture'
            },
            {
                title: 'Speed of Service',
                img: 'ico-speed-of-service'
            },
            {
                title: 'Service With A Smile',
                img: 'ico-service-with-a-smile'
            },
            {
                title: 'Good Music',
                img: 'ico-good-music'
            },
            {
                title: 'Clean Dining Area and Restrooms',
                img: 'ico-clean-dining-area-and-restrooms'
            },
            {
                title: 'Air Conditioned Ambience',
                img: 'ico-air-conditioned-ambience'
            },
            {
                title: 'Product Quality',
                img: 'ico-product-quality'
            },
            {
                title: 'Product Quality',
                img: 'ico-product-quality'
            }
        ]);

    }, []);

    return (
        <>

            

            

            <div className="content-areax">

                <section className="our-service-provide">
                    <div className="img-container">
                        <div className=""   ></div>
                        <img src='/assets/mbs/mambos-exp-top-bg.png' width='100%' />
                    </div>
                </section>

                <section className="our-service-provide">
                    <div className="img-container">
                        <div className=""   ></div>
                        <img src='/assets/mbs/people-bg.png' width='100%' />
                    </div>
                </section>

                <section className="our-service-provide"
                
                    style={{
                        backgroundImage: "url('/assets/mbs/tell-us-bg.png')",
                        backgroundSize: 'cover',
                        backgroundColor: '#a100ff',
                        backgroundPosition: "center"
                    }}
                
                >
                    
                    <div className="row">
                        <div className="col-md-8">
                            <div className="img-container">
                                <img className='tell-us-1' src='/assets/mbs/chicken-on-wood.png' width='100%' />
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="img-container">
                                <img className='tell-us-2' src='/assets/mbs/tell-us.png' width='100%' style={{marginTop: '50px'}} />
                            </div>
                        </div>
                    </div>
                    
                </section>

                <section className="our-service-provide"
                
                    style={{
                        backgroundImage: "url('/assets/mbs/bg-experience.png')",
                        backgroundSize: 'cover',
                        backgroundColor: '#a100ff',
                        backgroundPosition: "center bottom"
                    }}
                
                >
                    
                    <div className="row">
                        <div className="col-md-12">
                            <div className="img-container">
                                <img className='tell-us-1' src='/assets/mbs/our-promise.png' width='100%' />
                            </div>
                        </div>
                    </div>

                    <div className="container" style={{padding: '20px'}}>
                    
                    <div className="row">

                        {experiences.map((item:any, index:number) => (

                        <div className="col-md-3">
                            <div className="exp-container">
                                <div className='w-100 text-center'>
                                    <img className='experience-image' src={`/assets/mbs/${item.img}.svg`} width='100%' />
                                    <h4 className='experience-name'>{item.title}</h4>
                                </div>
                                <div className='experience-hearts-container'>
                                    <img src='/assets/mbs/hearts-bottom-right.png' width={'30%'} style={{float: 'right'}} />
                                </div>
                            </div>
                        </div>
                        
                        ))}

                    </div>

                    </div>
                    
                </section>

                <section className="our-service-provide"
                
                    style={{
                        backgroundImage: "url('/assets/mbs/tell-us-bg.png')",
                        backgroundSize: 'cover',
                        backgroundColor: '#a100ff',
                        backgroundPosition: "center"
                    }}
                
                >
                    
                    <div className="row">
                        <div className="col-md-8">
                            <div className="img-container pt-150 pb-50">
                                <a href='/contact-us'>
                                    <img className='tell-us-3' src='/assets/mbs/bg-experience-bottom.svg' width='100%' />
                                </a>
                            </div>
                        </div>
                    </div>
                    
                </section>

            </div>
            {/*    content-area    */}


            <section className="cta-banner style-3" style={{backgroundColor: '#efefef'}}>
                <div className="container-fluid bg-cover section-bg"
                     style={{backgroundImage: "url('assets/img/cta_bg1.png')"}}>
                    <div className="cta-content">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-12">
                                <h1 className={'text-black'}>Stay Informed</h1>
                                <h3 className={'text-muted mt-3'}>Sign me up to Mambo’s Chicken emails for access to exclusive events and flaming Competitions!</h3>
                                <div className="banner-strip-d-flex  w-100 mt-5">
                                    <div className="single-footer-wid site_footer_widget newsletter_widget w-80" >
                                        <div className="newsletter_box">
                                            <form action="#" className="mt-0">
                                                <input type="email" placeholder="Email address" />
                                                <button className="submit-btn" type="submit"><i
                                                    className="fal fa-envelope-open-text"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-12" style={{minHeight: '255px'}}>
                                <h1 className={'text-black'}>Na - Enjoyment?</h1>
                                <h3 className={'text-muted mt-3'}>Download our app for a taste of royalty delivered right to you doorstep.</h3>
                                <div className="banner-strip-d-flex  w-100 mt-5" style={{maxWidth: '300px'}}>
                                    <a href="contact.html" className="download-app android mr-30 ">
                                        &nbsp;
                                    </a>
                                    <a href="services-details.html" className="download-app ios">
                                        &nbsp;
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );

};

export default Experience;