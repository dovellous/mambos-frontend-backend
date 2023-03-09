import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../auth/provider/AuthProvider";
import {HomePageSlider} from "../layout/widgets/sliders/HomePageSlider";


type PageProps = {
  children?: React.ReactNode;
}

const Home:React.FunctionComponent<PageProps> = ({ children, ...props}) : any | null => {
  
  const { user }: any = useAuth();
  
  return (
      <>
    
          <HomePageSlider />
    
          <div className="content-area">

        
              <section className="our-service-provide techex-landing-page">
                  <div className="container">
                      <div className="row align-items-center">
                          <div className="col-12 text-center">
                              <div className="section-title">
                                  <a className="theme-btn-sm mb-15" data-aos="fade-up">what we Do</a>
                                  <h1 data-aos="fade-up" data-aos-delay="100">We Provide Best Solutions For IT
                                      Business</h1>
                              </div>
                          </div>
                      </div>
                
                      <div className="row text-center">
                          <div className="col-xl-4 col-md-6 col-12" data-aos="fade-up">
                              <div className="single-our-service style-2">
                                  <div className="thumb bg-cover"
                                       style={{backgroundImage: "url('assets/img/case/2.jpg')" }} ></div>
                                  <div className="content">
                                      <div className="icon">
                                          <i className="fal fa-envelope"></i>
                                      </div>
                                      <h3><a href="services-details.html">Product Engineering</a></h3>
                                      <p>Lorem ipsum dolor sitconsectetur adipiscing eiusmod tempor.</p>
                                      <a href="#" className="read-more text-uppercase">read more <i
                                          className="icon-arrow-right-1"></i></a>
                                  </div>
                              </div>
                          </div>
                    
                          <div className="col-xl-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="100">
                              <div className="single-our-service style-2">
                                  <div className="thumb bg-cover"
                                       style={{backgroundImage: "url('assets/img/case/2.jpg')" }} ></div>
                                  <div className="content">
                                      <div className="icon">
                                          <img src="/assets/img/techex-landing-page/sketch.png" alt="" />
                                      </div>
                                      <h3><a href="services-details.html">Web Development</a></h3>
                                      <p>Lorem ipsum dolor sitconsectetur adipiscing eiusmod tempor.</p>
                                      <a href="#" className="read-more text-uppercase">read more <i
                                          className="icon-arrow-right-1"></i></a>
                                  </div>
                              </div>
                          </div>
                    
                          <div className="col-xl-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="150">
                              <div className="single-our-service style-2">
                                  <div className="thumb bg-cover"
                                       style={{backgroundImage: "url('assets/img/case/2.jpg')" }} ></div>
                                  <div className="content">
                                      <div className="icon">
                                          <img src="/assets/img/techex-landing-page/diagram.png" alt="" />
                                      </div>
                                      <h3><a href="services-details.html">UX/UI Strategy</a></h3>
                                      <p>Lorem ipsum dolor sitconsectetur adipiscing eiusmod tempor.</p>
                                      <a href="#" className="read-more text-uppercase">read more <i
                                          className="icon-arrow-right-1"></i></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
        
              <section className="our-team-wrapper techex-landing-page">
                  <div className="container">
                      <div className="row align-items-center">
                          <div className="col-12 text-center">
                              <div className="section-title">
                                  <a className="theme-btn-sm mb-15" data-aos="fade-up">MEET OUR EXPERT TEAM</a>
                                  <h1 data-aos="fade-up" data-aos-delay="100">Meet Our Experience Team Members</h1>
                              </div>
                          </div>
                      </div>
                
                      <div className="row">
                          <div className="col-12 col-md-6 col-xl-3" data-aos="fade-up">
                              <div className="single-member-card style-2">
                                  <div className="member-img bg-cover bg-center"
                                       style={{backgroundImage: "url('assets/img/techex-landing-page/tm1.jpg')" }} >
                                  </div>
                                  <div className="member-bio">
                                      <h4>Lawrence Pacheco</h4>
                                      <p>Web Developer</p>
                                  </div>
                                  <div className="social-profile">
                                      <span>Follow on</span>
                                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                                      <a href="#"><i className="fab fa-twitter"></i></a>
                                      <a href="#"><i className="fab fa-instagram"></i></a>
                                      <a href="#"><i className="fab fa-behance"></i></a>
                                  </div>
                              </div>
                          </div>
                    
                          <div className="col-12 col-md-6 col-xl-3" data-aos="fade-up" data-aos-delay="100">
                              <div className="single-member-card style-2">
                                  <div className="member-img bg-cover bg-center"
                                       style={{backgroundImage: "url('assets/img/techex-landing-page/tm2.jpg')" }} >
                                  </div>
                                  <div className="member-bio">
                                      <h4>Lawrence Pacheco</h4>
                                      <p>Web Developer</p>
                                  </div>
                                  <div className="social-profile">
                                      <span>Follow on</span>
                                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                                      <a href="#"><i className="fab fa-twitter"></i></a>
                                      <a href="#"><i className="fab fa-instagram"></i></a>
                                      <a href="#"><i className="fab fa-behance"></i></a>
                                  </div>
                              </div>
                          </div>
                    
                          <div className="col-12 col-md-6 col-xl-3" data-aos="fade-up" data-aos-delay="150">
                              <div className="single-member-card style-2">
                                  <div className="member-img bg-cover bg-center"
                                       style={{backgroundImage: "url('assets/img/techex-landing-page/tm3.jpg')" }} >
                                  </div>
                                  <div className="member-bio">
                                      <h4>Timothy L. Figueroa</h4>
                                      <p>Business Manager</p>
                                  </div>
                                  <div className="social-profile">
                                      <span>Follow on</span>
                                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                                      <a href="#"><i className="fab fa-twitter"></i></a>
                                      <a href="#"><i className="fab fa-instagram"></i></a>
                                      <a href="#"><i className="fab fa-behance"></i></a>
                                  </div>
                              </div>
                          </div>
                    
                          <div className="col-12 col-md-6 col-xl-3" data-aos="fade-up" data-aos-delay="200">
                              <div className="single-member-card style-2">
                                  <div className="member-img bg-cover bg-center"
                                       style={{backgroundImage: "url('assets/img/techex-landing-page/tm4.jpg')" }} >
                                  </div>
                                  <div className="member-bio">
                                      <h4>Wallace S. Camacho</h4>
                                      <p>Product Manager</p>
                                  </div>
                                  <div className="social-profile">
                                      <span>Follow on</span>
                                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                                      <a href="#"><i className="fab fa-twitter"></i></a>
                                      <a href="#"><i className="fab fa-instagram"></i></a>
                                      <a href="#"><i className="fab fa-behance"></i></a>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              <section className="blog-section techex-landing-page"

                style={{
                    backgroundImage: "url('/assets/elements/banners/bg-body.svg')",
                    backgroundSize: 'cover',
                    backgroundColor: '#a100ff',
                    backgroundBlendMode: "difference",
                    backgroundPosition: "center"
                }}
              >
                  <div className="container">
                      <div className="row">
                          <div className="col-12">
                              <div className="section-title text-center">
                                  <h1 data-aos="fade-up" data-aos-delay="100">
                                      <img src={`assets/elements/banners/txt-home-favourites.svg`} />
                                  </h1>
                              </div>
                          </div>
                      </div>
                
                      <div className="row">
                          <div className="col-xl-4 col-md-6 col-12" data-aos="fade-up">
                              <div className="single-blog-card style-3">
                                  <div className="blog-featured-thumb bg-cover"
                                       style={{backgroundImage: "url('assets/img/case/2.jpg')" }} ></div>
                                  <div className="content">
                                      <div className="post-top-meta d-flex flex-wrap align-items-center">
                                          <div className="post-date">
                                              <a href="#"><i className="fal fa-calendar-alt"></i>18 Jan 2022</a>
                                          </div>
                                          <div className="post-comment">
                                              <a href="#"><i className="icon-message"></i>02 Comments</a>
                                          </div>
                                      </div>
                                      <h3><a href="news-details.html">Web Development</a></h3>
                                      <div className="excerpt">
                                          <p>Lorem ipsum dolor sitconsectetur adipiscing eiusmod tempor.</p>
                                      </div>
                                      <div className="btn-link-share d-flex justify-content-between align-items-center">
                                          <a href="news-details.html">read more <i
                                              className="icon-arrow-right-1"></i></a>
                                          <a href="#"><i className="fal fa-share-alt"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                    
                          <div className="col-xl-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="100">
                              <div className="single-blog-card style-3">
                                  <div className="blog-featured-thumb bg-cover"
                                       style={{backgroundImage: "url('assets/img/case/2.jpg')" }} ></div>
                                  <div className="content">
                                      <div className="post-top-meta d-flex flex-wrap align-items-center">
                                          <div className="post-date">
                                              <a href="#"><i className="fal fa-calendar-alt"></i>18 Jan 2022</a>
                                          </div>
                                          <div className="post-comment">
                                              <a href="#"><i className="icon-message"></i>02 Comments</a>
                                          </div>
                                      </div>
                                      <h3><a href="news-details.html">Web Development</a></h3>
                                      <div className="excerpt">
                                          <p>Lorem ipsum dolor sitconsectetur adipiscing eiusmod tempor.</p>
                                      </div>
                                      <div className="btn-link-share d-flex justify-content-between align-items-center">
                                          <a href="news-details.html">read more <i
                                              className="icon-arrow-right-1"></i></a>
                                          <a href="#"><i className="fal fa-share-alt"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                    
                          <div className="col-xl-4 col-md-6 col-12" data-aos="fade-up" data-aos-delay="150">
                              <div className="single-blog-card style-3">
                                  <div className="blog-featured-thumb bg-cover"
                                       style={{backgroundImage: "url('assets/img/case/2.jpg')" }} ></div>
                                  <div className="content">
                                      <div className="post-top-meta d-flex flex-wrap align-items-center">
                                          <div className="post-date">
                                              <a href="#"><i className="fal fa-calendar-alt"></i>18 Jan 2022</a>
                                          </div>
                                          <div className="post-comment">
                                              <a href="#"><i className="icon-message"></i>02 Comments</a>
                                          </div>
                                      </div>
                                      <h3><a href="news-details.html">Web Development</a></h3>
                                      <div className="excerpt">
                                          <p>Lorem ipsum dolor sitconsectetur adipiscing eiusmod tempor.</p>
                                      </div>
                                      <div className="btn-link-share d-flex justify-content-between align-items-center">
                                          <a href="news-details.html">read more <i
                                              className="icon-arrow-right-1"></i></a>
                                          <a href="#"><i className="fal fa-share-alt"></i></a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
          </div>
          {/*    content-area    */}

          <section className="cta-banner style-3">
              <div className="container-fluid bg-cover section-bg"
                   style={{background: "none", padding: 0}}>

                  <img src={`assets/elements/banners/banner-home-footer.png`} className={'w-100'} />

              </div>
          </section>
    
          <section className="cta-banner style-3">
              <div className="container-fluid bg-cover section-bg"
                   style={{backgroundImage: "url('assets/img/cta_bg1.png')"}}>
                  <div className="cta-content">
                      <div className="row align-items-center">
                          <div className="col-xl-7 text-white col-12 text-center text-xl-left">
                              <h1>Ready To Get Free Consulations For <br /> Any Kind Of It Solutions ?</h1>
                          </div>
                          <div className="col-xl-5 col-12">
                              <div className="btn-wraper d-flex flex-wrap justify-content-xl-end mt-2 mt-md-4 mt-xl-0">
                                  <a href="contact.html" className="theme-btn">Get a quote <i
                                      className="icon-arrow-right-1"></i></a>
                                  <a href="services-details.html" className="theme-btn">read more <i
                                      className="icon-arrow-right-1"></i></a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

      </>
  );
  
};

export default Home;