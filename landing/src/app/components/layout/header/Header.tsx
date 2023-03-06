import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../auth/provider/AuthProvider";

type HeaderProps = {
    children: React.ReactNode;
}

export const Header:React.FunctionComponent<HeaderProps> = ({ children, ...props}) : any | null => {

  const { user }: any = useAuth();

  const [physicalAddress, setPhysicalAddress] = useState('17 Park Street, Harare')

  const [phoneNumber, setPhoneNumber] = useState('+263 (71) 921 6187');

  const [emailAddress, setEmailAddress] = useState('delivery@mamboschicken.co.zw')
  
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
                                                {navMenu.map((menuItem:any, menuIndex:number)=>(
                                                    <li><a
                                                        key={menuIndex}
                                                        href={menuItem.href}
                                                        title={menuItem.slug}
                                                        target={menuItem.target}
                                                        className={menuItem.subMenu.left > 0 ? 'has-arrow' : ''}
                                                    >{menuItem.title}</a>
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
                                        </nav>

                                        <div className="header-btn-cta buttons-wrapper">
                                            <a href="contact.html" className="theme-btn mr-10 cyan w-100 mt-2 mb-2" style={{width: '100% !important', display: 'table'}}>
                                                <img src="/assets/elements/buttons/btn-menu-download-app.svg" className={' w-100'} alt="Mambo's Chicken" style={{width: '100% !important'}}/>
                                            </a>
                                            <a href="contact.html" className="theme-btn magenta w-100 mt-2 mb-2" style={{width: '100% !important', display: 'table'}}>
                                                <img src="/assets/elements/buttons/btn-menu-order-online.svg" className={' w-100'} alt="Mambo's Chicken" style={{width: '100% !important'}}/>
                                            </a>
                                        </div>
                                        <div className="action-bar">
                                            <a href="#"><i className="icon-location-dot"></i>{physicalAddress}</a>
                                            <a href={"mailto:"+emailAddress}><i
                                                className="fal fa-envelope-open-text"></i>{emailAddress}</a>
                                            <a href={"tel:"+phoneNumber}><i className="fal fa-phone"></i>{phoneNumber}</a>
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
