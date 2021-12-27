import React, { useState } from 'react';
import * as Icons from 'react-icons/bs';
import Link from 'next/link';
import styled from 'styled-components';
import { styled as sstyled } from '@css/stitches.config';

// const [isOpen, setOpen] = useState<boolean>(false);

const DropdownTitle = sstyled('span', {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '&:hover': {
        '& svg': {
            fill: '$hover'
        }
    }
})

const NavItemText = sstyled('a', {
    display: 'flex',
    color: '$main',
    fontSize: '$2',
    textDecoration: 'none',
    alignItems: 'center',
    // margin: '0 15px',
    fontFamily: '$main',
    '&:hover': {
        color: '$hover',
    },
    
})


const ProxyTitle = sstyled('a', {
    position: 'absolute',
    marginTop: '25px',
    display: 'none',
    fontSize: '$2',
    alignItems: 'center',
    fontFamily: '$main',
    transition: '0.1s linear',
    opacity: 0,
    zIndex: 9,

    variants: {
        variant: {
            home: {
                top: 37,
            },
            rest: {
                top: 25
            }
        }
    },
})

const ProxyDropList = sstyled('ul', {
    position: 'absolute',
    border: '1px solid $hover',
    width: '100%',
    height: '150%',
    left: -20,
    top: 0,
})

const DropdownList = sstyled('ul', {
    background: '$dropdownBackground',
    border: '1px solid $dropdownBorder',
    zIndex: 99,
    display: 'block',
    visibility: 'hidden',
    position: 'absolute',
    margin: 0,
    width: 'auto',
    borderRadius: '0.5rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',

    variants: {
        variant: {
            home: {
                marginTop: '-.75rem'
            },
            rest: {
                marginTop: '-.5rem'
            }
        }
    },
    opacity: 0,
    top: '90%',
    transition: '0.1s linear',
})

// const DropdownList = styled(DropList)`
//     margin: 0;
//     position: absolute;
//     margin-top: ${(props) => (props.variant==='home' ? `-.75rem` : `-.5rem`)};
//     list-style-type: none;
//     list-style-image: none;
//     top: 100%;
//     width: auto;
//     border-radius: 0.5em;
//     padding-top: 0.5rem;
//     padding-bottom: 0.5rem;
// `

const NavListItem = sstyled('div', {
    display: 'flex',
    margin: '0 15px',
    color: '$main',
    '@iPad': {
        margin: '0 10px'
    },
    [`&:hover ${DropdownList}`]: {
        opacity: 1,
        top: '100%',
        visibility: 'visible'
        
    },
    [`&:hover ${ProxyTitle}`]: {
        display: 'flex',
    },

})

const DropdownItem = sstyled('div', {
    // margin: '1rem 0',
    color: '$main',
    transition: '0.1s linear',
    '&:hover': {
        color: '$hover',
        background: '$dropdownHover',
    },
    
})

const SubLink = sstyled('a', {
    display: 'flex',
    cursor: 'pointer',
    color: '$main',
    fontSize: '$2',
    textDecoration: 'none',
    fontFamily: '$main',
    padding: '0.75rem',
    paddingLeft: '0.5rem',
    paddingRight: '0.5rem',
    '&:hover': {
        color: '$hover'
    },
    // border: '1px solid white'
})


export const NavDropdown: React.FC<{ section, items, page }> = ({ section, items, page='rest' }) => {
    return (
        <NavListItem>
            <DropdownTitle>
                <ProxyTitle variant={page}>{section.name}<Icons.BsCaretDownFill style={{ marginLeft: 5 }} size={10}/><ProxyDropList /></ProxyTitle>

                <Link href={section.link} passHref={true}>
                    <NavItemText>
                        {section.name}
                    </NavItemText>
                </Link>
                <Icons.BsCaretDownFill style={{ marginLeft: 5 }} size={10}/>
            </DropdownTitle>

            <DropdownList variant={page}>
                {
                    items.map((item, index) => (
                        <Link href={item.link} passHref={true} key={index}>
                            <DropdownItem>
                                    <SubLink>{item.name}</SubLink>
                            </DropdownItem>
                        </Link>

                    ))
                }
                
            </DropdownList>
        </NavListItem> 
    );
}
