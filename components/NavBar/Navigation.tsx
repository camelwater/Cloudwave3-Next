import Link from 'next/link';
import * as NavBar from './Navbar.theme';
import * as NavMenu from './Navmenu.theme';
import React from 'react';
import * as Icons from 'react-feather';
import { CSSTransition } from 'react-transition-group';
import SmoothScroll from '@components/Scroll';
import { ThemeToggle } from '@components/ThemeToggle';


const NavigationComponent: React.FC<{isHome?: boolean}> = ({isHome}) => {

    const [nav, setNav] = React.useState<boolean>(false);
    const [menu, setMenu] = React.useState<string>(null);

    const ToggleNav = () => {
        setNav((prevState) => !prevState)
        // setNav(!nav);
        if (nav) {
            document.documentElement.style.overflowY = 'scroll';
        } else {
            document.documentElement.style.overflowY = 'hidden';
        }
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
            }
        ]
    };

    const SubMenuLinks: React.FC<{entry}> = ({entry}) => {
        return (
            <>
                {
                    entry.name in subMenus && subMenus[entry.name].map((subEntry, subIndex) => (
                        <Link href={subEntry.link} key={subIndex} passHref={true}>
                            <NavMenu.SubMenuLink onClick={ToggleNav}>{subEntry.name}</NavMenu.SubMenuLink>
                        </Link>
                    ))
                }
            </>
        );
    }

    return (
        <> 
            <SmoothScroll isNav={true} />

            <CSSTransition in={(nav && !(menu in subMenus))} timeout={300} classNames='menu' unmountOnExit>
                <NavMenu.MenuContainer>
                    <NavMenu.Menu>
                        {
                            Links.map((entry, index) => (
                                <>
                                    <Link href={entry.link} key={index} passHref={true}>
                                        <NavMenu.MenuLink onClick={ToggleNav}>{entry.name}</NavMenu.MenuLink>
                                    </Link>

                                    <SubMenuLinks entry={entry} />
                                </>
                        ))}
                        
                             {/* (entry.name in subMenus) ? 
                                 <NavMenu.SubMenuLevel key={index} onClick={() => setMenu(entry.name)}>
                                    {entry.name} 
                                     <Icons.ChevronRight style={{ marginLeft: 7, height: 15, width: 15, marginTop: 2.5 }}/>
                                </NavMenu.SubMenuLevel>
                             :
                                 <Link href={entry.link} key={index} passHref={true}>
                                     <NavMenu.MenuLink onClick={ToggleNav}>{entry.name}</NavMenu.MenuLink>
                                 </Link> */}
                        
                    </NavMenu.Menu>
                    <NavMenu.ProxyMenuContainer onClick={ToggleNav} />
                    <NavMenu.BottomMenu variant='first' >
                        <ThemeToggle type='mobile' />
                    </NavMenu.BottomMenu>
                </NavMenu.MenuContainer>
            </CSSTransition>

            {/* <CSSTransition in={nav && (menu in subMenus)} timeout={300} classNames='sub-menu' unmountOnExit>
                <NavMenu.SubMenuContainer>
                    <NavMenu.SubMenuArea>
                        <NavMenu.SubMenu>
                            {menu in subMenus && subMenus[menu].map((entry, index) => (
                                <Link href={entry.link} key={index} passHref={true}>
                                    <NavMenu.SubMenuLink onClick={ToggleNav}>{entry.name}</NavMenu.SubMenuLink>
                                </Link>
                            ))}
                        </NavMenu.SubMenu>
                        <NavMenu.BottomMenu variant='sub' >
                            <NavMenu.SubMenuButton onClick={() => setMenu(null)}>
                                <Icons.ChevronsLeft width={50} height={50}/>
                            </NavMenu.SubMenuButton>
                        </NavMenu.BottomMenu>
                    </NavMenu.SubMenuArea>  
                    
                    <NavMenu.SubMenuBlurArea onClick={ToggleNav}/>
                </NavMenu.SubMenuContainer>
            </CSSTransition> */}

            <NavBar.Nav variant={isHome?'home':'rest'}>
                <NavBar.NavContainer>
                    <NavBar.LinksContainer>
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
                    </NavBar.LinksContainer>
                    <ThemeToggle type='desktop' />
                    <NavMenu.MenuButton onClick={ToggleNav}>
                        <Icons.Menu />
                    </NavMenu.MenuButton>
                </NavBar.NavContainer>
            </NavBar.Nav>
        </>
    );
}

export default NavigationComponent