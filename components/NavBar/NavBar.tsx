import Link from 'next/link';
import * as Theme from './Navbar.theme';
import React from 'react';
import * as Icons from 'react-feather';
import ScrollAnimation from 'react-animate-on-scroll';

const NavigationMenu = () => {

    const [nav, setNav] = React.useState<boolean>(false)

    const ToggleNav = () => {
        setNav((prevState) => !prevState)
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
            <Theme.MenuContainer className={nav ? '' : 'disabled'} onClick={ToggleNav}>
                <ScrollAnimation animateIn='animate__fadeInDown' animateOut='animate__fadeOutDown' animatePreScroll={true}>
                    <Theme.Menu>
                        {Links.map((entry, index) => (
                            <Link href={entry.link} key={index} passHref={true}>
                                <Theme.MenuLink>{entry.name}</Theme.MenuLink>
                            </Link>
                        ))}
                    </Theme.Menu>
                </ScrollAnimation>
            </Theme.MenuContainer>

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
    )
}

export default NavigationMenu