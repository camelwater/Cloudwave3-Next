import { styled } from '@css/stitches.config'

export const Nav = styled('nav', {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    zIndex: 999,
    top: 0,
    left: 0,
    right: 0,
    background: '$dark',
    alignItems: 'center',
    height: 100,
    width: '100vw',
  })

export const NavContainer = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '65%',
    '@media only screen and (max-width: 650px)': {
        width: '80%',
        justifyContent: 'space-around !important',
    },
    '@iPadPro': {
        width: '100vw',
        justifyContent: 'center',
    },
})

export const TitleLinkText = styled('a', {
    fontFamily: '$mono',
    fontSize: '$4',
    color: '$main',
    marginLeft: 50,
    textDecoration: 'none',
    transition: '0.2s linear',
    '&:hover': {
        color: '$white',
        transform: 'scale(1.1, 1.1)'
    },
    '@Flip': {
    //   fontSize: '$2',
      display: 'flex !important',
    },
    '@iPhoneSE': {
      fontSize: '$2',
    },
  })

export const NavLinks = styled('div', {
    display: 'flex',
    '@media only screen and (max-width: 650px)': {
        display: 'none',
    },
})

export const NavLink = styled('a', {
    color: '$main',
    fontSize: '$3',
    textDecoration: 'none',
    margin: '0 15px',
    fontFamily: '$main',
    transition: '0.25s linear',
    '&:hover': {
        color: '$white',
    },
    '@iPad': {
        margin: '0 10px'
    }
})

// individual sub menus in the nav bar
export const SubMenu = styled('nav', {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    zIndex: 999,
    // top: 0,
    // left: 0,
    // right: 0,
    background: '$primary',
    alignItems: 'center',
    height: 100,
    width: '50vw',
})