import Link from 'next/link';
import * as NavBar from './Navbar.theme';
import * as NavMenu from './Navmenu.theme';
import React from 'react';
import * as Icons from 'react-feather';
import { CSSTransition } from 'react-transition-group';


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

    return (
        <>
            {nav && (
                <NavMenu.MenuContainer />
            )}
            <CSSTransition in={nav} timeout={300} classNames='menu' unmountOnExit>
                <NavMenu.ProxyMenuContainer onClick={ToggleNav}>
                    <NavMenu.Menu>
                        {Links.map((entry, index) => (
                            <Link href={entry.link} key={index} passHref={true}>
                                <NavMenu.MenuLink>{entry.name}</NavMenu.MenuLink>
                            </Link>
                        ))}
                    </NavMenu.Menu>
                </NavMenu.ProxyMenuContainer>
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