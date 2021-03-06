import Link from 'next/link';
import * as NavBar from './Navbar.theme';
import * as NavMenu from './Navmenu.theme';
import React from 'react';
import { CSSTransition } from 'react-transition-group';
// import SmoothScroll from '@components/Scroll';
import { ThemeToggle } from '@components/ThemeToggle';
import { NavDropdown } from './Dropdown';
import { HiMenuAlt4 } from 'react-icons/hi';


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
                link: "/services/#optimization"
            },
            {
                name: "Cloud Advisory",
                link: "/services/#cloud-advisory"
            },
            {
                name: "Digital Twins",
                link: "/services/#digital-twins"
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
            {/* <SmoothScroll isNav={true} /> */}

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
                        
                    </NavMenu.Menu>
                    <NavMenu.ProxyMenuContainer onClick={ToggleNav} />
                    <NavMenu.BottomMenu variant='first' >
                        <ThemeToggle type='mobile' />
                    </NavMenu.BottomMenu>
                </NavMenu.MenuContainer>
            </CSSTransition>

            <NavBar.Nav variant={isHome?'home':'rest'}>
                <NavBar.NavContainer>
                    <NavBar.LinksContainer>
                        <Link href='/' passHref={true}>
                            <NavBar.TitleLinkText>cloudwave3</NavBar.TitleLinkText>
                        </Link>
                            <NavBar.NavItems>
                                {Links.map((entry, index) => (
                                    entry.name in subMenus ? (
                                        <NavDropdown 
                                            key={index}
                                            page={isHome?'home':'rest'}
                                            section={entry}
                                            items={subMenus[entry.name]}
                                        />                                            
                                    ) : (
                                        <Link href={entry.link} key={index} passHref={true}>
                                            <NavBar.NavLink>
                                                {entry.name}
                                            </NavBar.NavLink> 
                                        </Link>
                                    )
                                ))}
                            </NavBar.NavItems>
                    </NavBar.LinksContainer>
                    <ThemeToggle type='desktop' />
                    <NavMenu.MenuButton onClick={ToggleNav}>
                        <HiMenuAlt4 size={30}/>
                    </NavMenu.MenuButton>
                </NavBar.NavContainer>
            </NavBar.Nav>
        </>
    );
}

export default NavigationComponent