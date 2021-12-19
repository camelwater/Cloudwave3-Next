import Link from 'next/link';
import * as NavBar from './Navbar.theme';
import * as NavMenu from './Navmenu.theme';
import React from 'react';
import * as Icons from 'react-feather';
import { CSSTransition } from 'react-transition-group';
import SmoothScroll from '@components/Scroll';


const NavigationComponent: React.FC = () => {

    const [nav, setNav] = React.useState<boolean>(false);
    const [menu, setMenu] = React.useState<string>(null);

    const ToggleNav = () => {
        setNav((prevState) => !prevState)
        // setNav(!nav);
    }


    const Links = [
        {
            name: 'Services',
            link: '/services'
        },
        {
            name: 'Solutions',
            link: '/solutions'
        },
        {
            name: 'Freedom Network',
            link: '/freedom-network'
        },
        {
            name: 'About',
            link: '/about'
        }
    ];

    const subMenus = {
        "Services": [
            {
                name: "Data Services",
                link: "/services/#data-services"
            },
            {
                name: "Optimization",
                link: "/services/#data-services"
            },
            {
                name: "Cloud Advisory",
                link: "/services/#cloud-advisory"
            }
        ],
        "Solutions": [
            {
                name: "Real-time Medicine",
                link: "/solutions/#rtm"
            },
            {
                name: "Diagnostic + Procedural Discovery",
                link: "/solutions/#dpd"
            },
            {
                name: "RPA",
                link: "/solutions/#rpa"
            },
            {
                name: "Chatbot",
                link: "/solutions/#chatbot"
            },
            {
                name: "Chatbot",
                link: "/solutions/#chatbot"
            },
            {
                name: "Chatbot",
                link: "/solutions/#chatbot"
            },
            {
                name: "Chatbot",
                link: "/solutions/#chatbot"
            },
            {
                name: "Chatbot",
                link: "/solutions/#chatbot"
            },
            {
                name: "Chatbot",
                link: "/solutions/#chatbot"
            },
            {
                name: "Chatbot",
                link: "/solutions/#chatbot"
            },
            {
                name: "Chatbot",
                link: "/solutions/#chatbot"
            },
            {
                name: "Chatbot",
                link: "/solutions/#chatbot"
            },
            {
                name: "Chatbot",
                link: "/solutions/#chatbot"
            },
            {
                name: "Chatbot",
                link: "/solutions/#chatbot"
            },
            {
                name: "Chatbot",
                link: "/solutions/#chatbot"
            },
            {
                name: "Chatbot",
                link: "/solutions/#chatbot"
            },
            {
                name: "Chatbot",
                link: "/solutions/#chatbot"
            },
            {
                name: "Chatbot",
                link: "/solutions/#chatbot"
            },
            {
                name: "Chatbot",
                link: "/solutions/#chatbot"
            },
            {
                name: "Chatbot",
                link: "/solutions/#chatbot"
            },
            {
                name: "Chatbot",
                link: "/solutions/#chatbot"
            }
            
        ]
    };

    return (
        <> 
            <SmoothScroll />
            <CSSTransition in={(nav && !(menu in subMenus))} timeout={300} classNames='menu' unmountOnExit>
                <NavMenu.MenuContainer>
                    <NavMenu.Menu>
                        {Links.map((entry, index) => (
                            (entry.name in subMenus) ? 
                                <NavMenu.MenuLink key={index} onClick={() => setMenu(entry.name)}>
                                    {entry.name}
                                </NavMenu.MenuLink>
                            :
                                <Link href={entry.link} key={index} passHref={true}>
                                    <NavMenu.MenuLink>{entry.name}</NavMenu.MenuLink>
                                </Link>
                        ))}
                    </NavMenu.Menu>
                    <NavMenu.ProxyMenuContainer onClick={ToggleNav} />
                </NavMenu.MenuContainer>
            </CSSTransition>

            <CSSTransition in={nav && (menu in subMenus)} timeout={300} classNames='sub-menu' unmountOnExit>
                <NavMenu.SubMenuContainer>
                    <NavMenu.SubMenuArea>
                        <NavMenu.SubMenuButton onClick={() => setMenu(null)}>
                            <Icons.ChevronsLeft width={50} height={50}/>
                        </NavMenu.SubMenuButton>
                        <NavMenu.SubMenuTextContainer>
                            <NavMenu.SubMenu>
                                {menu in subMenus && subMenus[menu].map((entry, index) => (
                                    <Link href={entry.link} key={index} passHref={true}>
                                        <NavMenu.SubMenuLink onClick={ToggleNav}>{entry.name}</NavMenu.SubMenuLink>
                                    </Link>
                                ))}
                            </NavMenu.SubMenu>
                        </NavMenu.SubMenuTextContainer>
                    </NavMenu.SubMenuArea>  
                    <NavMenu.SubMenuBlurArea onClick={ToggleNav}/>
                </NavMenu.SubMenuContainer>
            </CSSTransition>
            

            <NavBar.Nav>
                <NavBar.NavContainer>
                    <Link href='/' passHref={true}>
                        <NavBar.TitleLinkText>cloudwave3</NavBar.TitleLinkText>
                    </Link>
                        <NavBar.NavLinks>
                            {Links.map((entry, index) => (
                                <Link href={entry.link} key={index} passHref={true}>
                                    <NavBar.NavLink
                                    // onMouseOut={() => setMenu(entry.name)} 
                                    // onMouseOver={() => setMenu(null)}
                                    >
                                        {entry.name}
                                    </NavBar.NavLink> 
                                    {/* {menu===entry.name &&

                                    } */}
                                </Link>
                            ))}
                        </NavBar.NavLinks>
                    <NavMenu.MenuButton onClick={ToggleNav}>
                        <Icons.Menu />
                    </NavMenu.MenuButton>
                </NavBar.NavContainer>
            </NavBar.Nav>
        </>
    );
}

export default NavigationComponent