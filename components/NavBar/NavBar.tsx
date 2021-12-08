import Link from 'next/link';
import * as Theme from './Navbar.theme';
import React from 'react';
import * as Icons from 'react-feather';
import { CSSTransition } from 'react-transition-group';

const NavigationMenu: React.FC = () => {

    const [nav, setNav] = React.useState<boolean>(false)

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
            name: 'About Us',
            link: '/about'
        }
    ];

    return (
        <>
            {nav && (
                <Theme.MenuContainer />
            )}
            <CSSTransition in={nav} timeout={300} classNames="menu" unmountOnExit>
                <Theme.ProxyMenuContainer onClick={ToggleNav}>
                    <Theme.Menu>
                        {Links.map((entry, index) => (
                            <Link href={entry.link} key={index} passHref={true}>
                                <Theme.MenuLink>{entry.name}</Theme.MenuLink>
                            </Link>
                        ))}
                    </Theme.Menu>
                </Theme.ProxyMenuContainer>
            </CSSTransition>

            <Theme.Nav>
                <Theme.NavContainer>
                    <Theme.TitleLinkText href='/'>cloudwave3</Theme.TitleLinkText>
                        <Theme.NavLinks>
                            {Links.map((entry, index) => (
                                <Link href={entry.link} key={index} passHref={true}>
                                    <Theme.NavLink>{entry.name}</Theme.NavLink> 
                                </Link>
                            ))}
                        </Theme.NavLinks>
                    <Theme.MenuButton onClick={ToggleNav}>
                        <Icons.Menu />
                    </Theme.MenuButton>
                </Theme.NavContainer>
            </Theme.Nav>
        </>
    );
}

export default NavigationMenu