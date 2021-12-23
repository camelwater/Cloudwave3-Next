// mobile
import { styled } from '@css/stitches.config';


export const MenuContainer = styled('div', {
    zIndex: 9999,
    position: 'fixed',
    top: 0,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // '@media only screen and (min-width: 651px)': {
    //     display: 'none'
    // }
})

export const ProxyMenuContainer = styled('div', {
    zIndex: 99999,
    position: 'fixed',
    top: 0,
    left: '36vw',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backdropFilter: 'blur(5px)'
})

export const Menu = styled('div', {
    position: 'fixed',
    left: 0,
    width: '37vw',
    height: '100%',
    background: '$primary',
    zIndex: 999999,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '3rem 1rem 7rem',
    overflowX: 'hidden',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
        width: 5,
    },
    '&::-webkit-scrollbar-track': {
        background: '$primary',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '$main',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        background: '$hover',
    }
})

export const MenuButton = styled('button', {
    background: 'none',
    outline: 'none',
    border: 'none',
    color: '$white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.5s linear',
    '&:hover': {
        color: '$hover',
        transform: 'rotate(180deg)'
    },
    '@media only screen and (min-width: 700px)': {
      display: 'none',
    },
})

export const SubMenuLevel = styled('div', {
    display: 'flex',
    // wordWrap: 'break-word',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '$white',
    fontSize: '$3',
    fontFamily: '$main',
    margin: '0 10px 20px 10px',
    transition: '0.25s linear',
    '&:hover': {
        color: '$hover'
    }
})
export const MenuLink = styled('a', {
    cursor: 'pointer',
    textDecoration: 'none',
    color: '$white',
    fontSize: '$3',
    fontFamily: '$main',
    margin: '0 10px 20px 10px',
    transition: '0.25s linear',
    '&:hover': {
        color: '$hover'
    }
  })


// <!----- SUBMENU STUFF -----!> //

export const SubMenuContainer = styled('div', {
    zIndex: 9999,
    position: 'fixed',
    top: 0,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // '@media only screen and (min-width: 651px)': {
    //     display: 'none'
    // }
})

export const SubMenuBlurArea = styled('div', {
    zIndex: 99999,
    position: 'fixed',
    top: 0,
    left: '63%',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backdropFilter: 'blur(5px)'
})

export const SubMenuArea = styled('div', {
    position: 'fixed',
    left: 0,
    width: '65%',
    height: '100%',
    background: '$primary',
    zIndex: 999999,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'top',
    textAlign: 'left',
    
})

export const BottomMenu = styled('div', {
    background: '$primary',
    borderTop: '1px solid $hover',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    display: 'flex',
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '75px',
    variants: {
        variant: {
            first: {
                width: '37vw'
            },
            sub: {
                width: '65%',
            }
        }
    },
    zIndex: 99999999
})


export const SubMenu = styled('div', {
    zIndex: 999999,
    display: 'flex',
    flexDirection: 'column',
    padding: '3rem 1rem 7rem',
    overflowX: 'hidden',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
        width: 5,
    },
    '&::-webkit-scrollbar-track': {
        background: '$primary',
    },
    '&::-webkit-scrollbar-thumb': {
        background: '$main',
    },
    '&::-webkit-scrollbar-thumb:hover': {
        background: '$hover',
    }
    
})

export const SubMenuLink = styled('a', {
    cursor: 'pointer',
    textDecoration: 'none',
    color: '$white',
    fontSize: '21px',
    fontFamily: '$main',
    margin: '0 10px 20px 10px',
    transition: '0.25s linear',
    '&:hover': {
        color: '$hover'
    }
})

export const SubMenuButton = styled('button', {
    // position: 'relative',
    // width: 50,
    // top: '3%',
    // right: '-100%',
    // marginLeft: '-75px',
    // position: 'absolute',
    // right: '5%',
    zIndex: 999999999,
    background: 'none',
    outline: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'right',
    transition: '0.25s linear',
    color: '$main',
    '&:hover': {
        color: '$hover',
        transform: 'rotate(180deg)'
    },
    // '@media only screen and (min-width: 650px)': {
    //   display: 'none',
    // },
})