import { styled } from '@css/stitches.config';


export const Nav = styled('nav', {
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    zIndex: 999,
    top: 0,
    left: 0,
    right: 0,
    background: '$navBackground',
    borderBottom: '1px solid $lightBorder',
    alignItems: 'center',
    width: '100vw',

    variants: {
        variant: {
            home: {
                height: '100px'
            },
            rest: {
                height: '75px'
            }
        }
    }
})

export const NavContainer = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '75%',
    maxWidth: '1200px',
    '@iPadPro': {
        width: '95vw',
        justifyContent: 'center',
    },
    '@media only screen and (max-width: 700px)': {
        width: '80%',
        justifyContent: 'space-around !important',
    },

})

export const LinksContainer = styled('div', {
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'baseline',
    width: '90%',
    '@media (max-width: 700px)': {
        width: '50%'
    },
    // border: '1px solid green',
})


export const TitleLinkText = styled('a', {
    fontFamily: '$mono',
    fontSize: '$4',
    color: '$main',
    marginRight: '15px',
    textDecoration: 'none',
    transition: '0.1s linear',
    '&:hover': {
        background: '$gradient',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        animation: 'color-rotation 2.5s',
        animationIterationCount: 'infinite',
        animationDirection: 'alternate',
        transform: 'scale(1.1, 1.1)'
    },
    '&:active': {
        transform: 'scale(0.95, 0.95)'
    },
    // '@Flip': {
    // //   fontSize: '$2',
    //   display: 'flex !important',
    // },
    '@iPhoneSE': {
      fontSize: '$2',
    },
  })


export const NavLink = styled('a', {
    color: '$main',
    fontSize: '$2',
    textDecoration: 'none',
    margin: '0 15px',
    fontFamily: '$main',
    transition: '0.25s linear',
    '&:hover': {
        color: '$hover',
    },
    // '@iPadPro':{
    //     fontSize: '$2'
    // },
    '@iPad': {
        margin: '0 10px'
    }
})

export const NavItems = styled('div', {
    display: 'flex',
    '@media only screen and (max-width: 700px)': {
        display: 'none',
    },
    alignItems: 'baseline',

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