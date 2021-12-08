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
    '@Flip': {
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
    transition: '0.1s linear',
    '&:hover': {
        color: '$white',
        transform: 'scale(1.1, 1.1)'
    },
    '@Flip': {
      fontSize: '$2',
      display: 'flex !important',
    },
    '@iPhoneSE': {
      fontSize: '$1',
    },
    '@iPadPro': {
      display: 'none',
    },
  })

export const NavLinks = styled('div', {
    display: 'flex',
    '@Flip': {
        display: 'none',
    },
})

export const NavLink = styled('a', {
    color: '$main',
    fontSize: '$2',
    textDecoration: 'none',
    margin: '0 15px',
    fontFamily: '$main',
    '&:hover': {
        color: '$white',
    },
})


// mobile
export const MenuContainer = styled('div', {
    zIndex: 999999,
    position: 'fixed',
    height: '100vh',
    width: '100vw',
    background: '#2A2A2A90',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  })

export const Menu = styled('div', {
    width: 280,
    height: 300,
    background: '$primary',
    zIndex: 9999999,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
})

export const MenuButton = styled('button', {
    background: 'none',
    outline: 'none',
    border: 'none',
    color: '$white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media only screen and (min-width: 600px)': {
      display: 'none',
    },
})

export const MenuLink = styled('a', {
    textDecoration: 'none',
    color: '$white',
    fontSize: '$3',
    fontFamily: '$main',
    margin: '0 0 10px 30px',
  })