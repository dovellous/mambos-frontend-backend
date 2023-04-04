import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth/provider/AuthProvider";
import {ExperiencePageSlider} from "../layout/widgets/sliders/ExperiencePageSlider";


type PageProps = {
    children?: React.ReactNode;
}

const Corporate:React.FunctionComponent<PageProps> = ({ children, ...props}) : any | null => {


    return (
        <>

            

            

<div className="content-areax">

<section className="our-service-provide"

    style={{
        backgroundImage: "url('/assets/mbs/tell-us-bg.png')",
        backgroundSize: 'cover',
        backgroundColor: '#a100ff',
        backgroundPosition: "center bottom"
    }}

>
    
    <div className="row">
        <div className="col-md-12">
            <div className="img-container">
                <img className='about-us-1' src='/assets/mbs/about-1.png' width='100%' />
            </div>
        </div>
    </div>

    <div className="row">
        <div className="container">
            <div className="fs-lg text-center mambos-font mt-50">
            <p className="fs-24 pt-20 pb-20 ">The world over, one of the most appreciated food is chicken for its tender and rich taste, when prepared right and given a professional artistry and love, it becomes a meal you cannot go without. Tradition and modernity, comfort and dynamism, elegance,
                            and immediacy, are just some of the demands from those who prepare the meals at Mambo’s Chicken.</p>
                        <p className="fs-24 pt-20 pb-20 ">A challenge that Mambo’s Chicken welcomes through the strength of their experience, value of their quality, and eclecticism of the full menu on offer. Fried &amp; Grilled Chicken, Burgers, and a combination of these served with traditional Sadza or Chips
                            are made to interpret the versatility, the most diverse styles in recipes, merging the needs of the client and desired taste with the flavor and prestige typical of “cuisines” from around the world.</p>
                            <img src='/assets/mbs/bottom-text-border.svg' className='mt-80 mb-80' width='200px' />
            </div>
        </div>
    </div>
    <div className="row">
        <div className="col-md-12">
            <div className="img-container">
                <img className='about-us-1' src='/assets/mbs/about-2.png' width='100%' />
            </div>
        </div>
    </div>

    <div className="row">
        <div className="container">
            <div className="fs-lg text-center mambos-font mt-50">
                <p className="fs-24 pt-20 pb-20 ">Mambo’s Chicken was opened in Harare, Zimbabwe in 2018. It is a true taste of Fried and Grilled Chicken, that’s because Mambo’s is a family business. On any given day, you can bet you will find the best cooking and serving of food made to carter to the
                            heart and satisfy anyone with the royal experience as priority for every customer we serve.&nbsp;</p>
                        <p  className="fs-24 pt-20 pb-20 ">We are honored and humbled to be able to serve so many each day and even more so to have that passion recognized by others.</p>
                        <img src='/assets/mbs/bottom-text-border.svg' className='mt-80 mb-80' width='200px' />
            </div>
        </div>
    </div>

</section>


</div>
{/*    content-area    */}

<div className="content-areax">

<section className="our-service-provide"

    style={{
        backgroundImage: "url('/assets/mbs/tell-us-bg.png')",
        backgroundSize: 'cover', backgroundRepeat: 'repeat',
        backgroundColor: '#a100ff',
        backgroundPosition: "left top"
    }}

>

<img className='about-us-1' src='/assets/mbs/about-3.png' width='100%' />
    
    <div className="row" 
        style={{
            backgroundImage: "url('/assets/mbs/text-bg.png')",
            backgroundSize: 'contain', 
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgb(248 246 234)',
            backgroundPosition: "left top",
            minHeight: '300px', 
            padding: '36px', 
            color: '#ffffff !important'

        }}>
        <div className="col-md-12">
            <div className="img-container">
                <h1 className="text-white text-center" style={{fontSize: '50px'}} >Vision</h1>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="container">
            <div className="fs-lg text-center mambos-font mt-0">
            <img src='/assets/mbs/triangle.png' className='m-0' width='36px' />
            <p className="fs-24 pt-30 pb-20 max-width-500">To operate the most profitable and largest CFR
business in the world focused
on ensuring that both customer and employee
are treated as Royalty.</p>
                            <img src='/assets/mbs/bottom-text-border.svg' className='mt-80 mb-80' width='200px' />
            </div>
        </div>
    </div>



    <img className='about-us-1' src='/assets/mbs/about-4.png' width='100%' />
    
    <div className="row" 
        style={{
            backgroundImage: "url('/assets/mbs/text-bg-2.png')",
            backgroundSize: 'contain', 
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgb(248 246 234)',
            backgroundPosition: "left top",
            minHeight: '300px', 
            padding: '36px', 
            color: '#ffffff !important'

        }}>
        <div className="col-md-12">
            <div className="img-container">
                <h1 className="text-white text-center" style={{fontSize: '50px'}} >Mission</h1>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="container">
            <div className="fs-lg text-center mambos-font mt-0">
            <img src='/assets/mbs/triangle-2.png' className='m-0' width='36px' />
            <p className="fs-24 pt-30 pb-20 max-width-500">To be the best CFR brand of choice in the world
offering product quality, healthy and nutritious
competitively priced meals offered
with exceptional service.</p>
                            <img src='/assets/mbs/bottom-text-border.svg' className='mt-80 mb-80' width='200px' />
            </div>
        </div>
    </div>



    <img className='about-us-1' src='/assets/mbs/about-5.png' width='100%' />
    
    <div className="row" 
        style={{
            backgroundImage: "url('/assets/mbs/text-bg.png')",
            backgroundSize: 'contain', 
            backgroundRepeat: 'no-repeat',
            backgroundColor: 'rgb(248 246 234)',
            backgroundPosition: "left top",
            minHeight: '300px', 
            padding: '36px', 
            color: '#ffffff !important'

        }}>
        <div className="col-md-12">
            <div className="img-container">
                <h1 className="text-white text-center" style={{fontSize: '50px'}} >Core Values</h1>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="container">
            <div className="fs-lg text-center mambos-font mt-0">
            <img src='/assets/mbs/triangle.png' className='m-0' width='36px' />
            <div className="row">
                <div className="col-md-6">
                    <p className="fs-24 pt-30 pb-20 max-width-500x">
                        <ul>
                            <li>Leadership</li>
                            <li>Accountability</li>
                            <li>Family</li>
                            <li>Integrity</li>
                            <li>Integrity</li>
                        </ul>
                    </p>
                </div>
                <div className="col-md-6">
                <p className="fs-24 pt-30 pb-20 max-width-500x">
                        <ul>
                            <li>Passion</li>
                            <li>Accountability</li>
                            <li>Diversity</li>
                            <li>Quality</li>
                            <li>Teamwork</li>
                        </ul>
                    </p>
                </div>

            </div>
                            <img src='/assets/mbs/bottom-text-border.svg' className='mt-80 mb-80' width='200px' />
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

export default Corporate;