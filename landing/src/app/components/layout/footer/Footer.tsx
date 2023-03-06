import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../auth/provider/AuthProvider";

type FooterProps = {
    children: React.ReactNode;
}

export const Footer:React.FunctionComponent<FooterProps> = ({ children, ...props}) : any | null => {

  const { user }: any = useAuth();
  
  return (
    <>
        
        <footer className="footer-4 footer-wrap">
            <div className="footer-widgets">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-6 col-xl-3 col-12 pr-xl-4">
                            <div className="single-footer-wid site_footer_widget">
                                <a href="index-1.html">
                                    <img src="/assets/img/logo-2.png" alt="" />
                                </a>
                                <p className="mt-4">Sed ut perspiciatis unde omnis natus voluptatem accusa ntiumy
                                    doloremque laudantium.omnis natus voluptatem accusa ntiumy doloremque laudantium</p>
                                <div className="social-link mt-30">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-behance"></i></a>
                                    <a href="#"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                        {/*    /.col-lg-3 - single-footer-wid    */}
                        <div className="col-md-6 col-xl-2 col-12">
                            <div className="single-footer-wid">
                                <div className="wid-title">
                                    <h4>Company</h4>
                                </div>
                                <ul>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="about.html">Company History</a></li>
                                    <li><a href="contact.html">Need a Career</a></li>
                                    <li><a href="project-details.html">Working Process</a></li>
                                    <li><a href="news.html">Blog Post</a></li>
                                </ul>
                            </div>
                        </div>
                        {/*    /.col-lg-3 - single-footer-wid    */}
                        <div className="col-md-6 col-xl-2 col-12">
                            <div className="single-footer-wid">
                                <div className="wid-title">
                                    <h4>Useful Link</h4>
                                </div>
                                <ul>
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="about.html">Company History</a></li>
                                    <li><a href="contact.html">Need a Career</a></li>
                                    <li><a href="project-details.html">Working Process</a></li>
                                    <li><a href="news.html">Blog Post</a></li>
                                </ul>
                            </div>
                        </div>
                        {/*    /.col-lg-3 - single-footer-wid    */}
                        <div className="col-md-6 col-xl-3 col-12">
                            <div className="single-footer-wid recent_post_widget">
                                <div className="wid-title">
                                    <h4>News & Article</h4>
                                </div>
                                <div className="recent-post-list">
                                    <div className="single-recent-post">
                                        <div className="thumb bg-cover"
                                             style={{backgroundImage: "url('assets/img/blog/ip1.jpg')"}}></div>
                                        <div className="post-data">
                                            <span><i className="fal fa-calendar-alt"></i>24th Nov 2020</span>
                                            <h5><a href="news-details.html">User’s Perspes Using Story Structure</a>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="single-recent-post">
                                        <div className="thumb bg-cover"
                                             style={{backgroundImage: "url('assets/img/blog/ip1.jpg')"}}></div>
                                        <div className="post-data">
                                            <span><i className="fal fa-calendar-alt"></i>15th July 2021</span>
                                            <h5><a href="news-details.html">Optimiz For Assistive Technology Users</a>
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*    /.col-lg-3 - single-footer-wid    */}
                    </div>
                </div>
            </div>
        
            <div className="footer-bottom">
                <div className="container text-center">
                    <div className="footer-bottom-content">
                        © 2021 <a href="index-1.html">Techex</a>. All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>

    </>
  );
  
};
