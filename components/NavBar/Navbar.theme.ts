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
    // '@iPadPro': {
    //   display: 'none',
    // },
  })

export const NavLinks = styled('div', {
    display: 'flex',
    '@Flip': {
        display: 'none',
    },
})

export const NavLink = styled('a', {
    color: '$main',
    fontSize: '$3',
    textDecoration: 'none',
    margin: '0 15px',
    fontFamily: '$main',
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