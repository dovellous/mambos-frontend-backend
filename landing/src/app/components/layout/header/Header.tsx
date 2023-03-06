import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../auth/provider/AuthProvider";

type HeaderProps = {
    children: React.ReactNode;
}

export const Header:React.FunctionComponent<HeaderProps> = ({ children, ...props}) : any | null => {

  const { user }: any = useAuth();
  
  const [navMenu, setNavMenu] = useState<any>([])
    
    useEffect(()=>{
        
        setNavMenu([
            {
                title: 'Home',
                target: '_self',
                slug: 'home',
                href: '/',
                subMenu: []
            },
            {
                title: 'Menu',
                target: '_self',
                slug: 'menu',
                href: '/menu',
                subMenu: []
            },
            {
                title: 'Corporate',
                target: '_self',
                slug: 'corporate',
                href: '/corporate',
                subMenu: []
            },
            {
                title: 'Mambo\'s Experience',
                target: '_self',
                slug: 'mambos-experience',
                href: '/mambos-experience',
                subMenu: []
            },
            {
                title: 'Promotion',
                target: '_self',
                slug: 'promotion',
                href: '/promotion',
                subMenu: []
            },
            {
                title: 'Contact Us',
                target: '_self',
                slug: 'contact-us',
                href: '/contact-us',
                subMenu: []
            },
        ])
        
    },[])
  
  return (
    <>
    
        <header className="header-wrap header-5">
            <div className="main-header-wraper">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-between">
                        <div className="header-logo">
                            <div className="logo">
                                <a href="/">
                                    <img className={'logo'} src="/assets/elements/logos/logo-full-color.svg" alt="logo" />
                                </a>
                            </div>
                        </div>
                        <div className="header-menu d-none d-xl-block">
                            <div className="main-menu">
                                <ul>
                                    {navMenu.map((menuItem:any, menuIndex:number)=>(
                                    <li><a
                                            key={menuIndex}
                                            href={menuItem.href}
                                            title={menuItem.slug}
                                            target={menuItem.target}>{menuItem.title} {menuItem.subMenu.left > 0 && (<i className="fas fa-angle-down"></i>)}</a>
                                        {menuItem.subMenu.length > 0 && (
                                        <ul className="sub-menu">
                                        {menuItem.subMenu.map((subMenuItem:any, subMenuIndex:number)=>(
                                            <li>
                                                <a
                                                    key={subMenuIndex}
                                                    href={subMenuItem.href}
                                                    title={subMenuItem.slug}
                                                    target={subMenuItem.target}>{subMenuItem.title}</a>
                                        </li>
                                        ))}
                                        </ul>
                                        )}
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="header-right d-flex align-items-center">
                            <div className="header-btn-cta buttons-wrapper">
                                <a href="contact.html" className="theme-btn mr-10 cyan">
                                    <img src="/assets/elements/buttons/btn-menu-download-app.svg" alt="logo" />
                                </a>
                                <a href="contact.html" className="theme-btn magenta">
                                    <img src="/assets/elements/buttons/btn-menu-order-online.svg" alt="logo" />
                                </a>
                            </div>
                            <div className="mobile-nav-bar d-block ml-3 ml-sm-4 d-xl-none">
                                <div className="mobile-nav-wrap">
                                    <div id="hamburger">
                                        <i className="fal fa-bars"></i>
                                    </div>
                                    {/*    mobile menu - responsive menu     */}
                                    <div className="mobile-nav">
                                        <button type="button" className="close-nav">
                                            <i className="fal fa-times-circle"></i>
                                        </button>
                                        <nav className="sidebar-nav">
                                            <ul className="metismenu" id="mobile-menu">
                                                <li><a className="has-arrow" href="#">Homes</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="index-1.html">home 1</a></li>
                                                        <li><a href="index-2.html">home 2</a></li>
                                                        <li><a href="index-3.html">home 3</a></li>
                                                        <li><a href="index-4.html">home 4</a></li>
                                                        <li><a href="index-5.html">home 5</a></li>
                                                        <li><a href="index-6.html">home 6</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="about.html">about</a></li>
                                                <li><a href="services.html">services</a></li>
                                                <li><a href="#">Case Study</a></li>
                                                <li><a href="news.html">News</a></li>
                                                <li><a href="contact.html">Contact</a></li>
                                            </ul>
                                        </nav>
                                    
                                        <div className="action-bar">
                                            <a href="#"><i className="icon-location-dot"></i>55 Clark St, Brooklyn, NY
                                                11201, USA</a>
                                            <a href="mailto:techex@gmail.com"><i
                                                className="fal fa-envelope-open-text"></i>techex@gmail.com</a>
                                            <a href="tel:123-456-7890"><i className="fal fa-phone"></i>+ 88 ( 9800 )
                                                6802</a>
                                            <a href="contact.html" className="d-btn theme-btn black">Consultancy <i
                                                className="icon-arrow-right-1"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div className="header-gutter"></div>
        {/*    /header-gutter    */}
    </>
  );
  
};
