// mobile
import { styled } from '@css/stitches.config';


export const MenuContainer = styled('div', {
    zIndex: 9999,
    position: 'fixed',
    top: 0,
    // left: '36vw',
    height: '100%',
    width: '100%',
    // background: '#2A2A2A90',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backdropFilter: 'blur(5px)'
})


// export const ProxyMenuContainer2 = styled('div', {
//     zIndex: 99999,
//     position: 'fixed',
//     top: 0,
//     height: '100vh',
//     width: '100vw',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
// })

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
    height: '125%',
    background: '$primary',
    zIndex: 999999,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
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
        color: 'GoldenRod',
        transform: 'rotate(180deg)'
    },
    '@media only screen and (min-width: 650px)': {
      display: 'none',
    },
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
        color: 'GoldenRod'
    }
  })

// subMenu stuff

export const SubMenuContainer = styled('div', {
    zIndex: 9999,
    position: 'fixed',
    top: 0,
    height: '100%',
    width: '100%',
    // background: '$primary',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // backdropFilter: 'blur(5px)'
})

export const SubMenuBlurArea = styled('div', {
    zIndex: 99999,
    position: 'fixed',
    top: 0,
    left: '64%',
    width: '100%',
    height: '125%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    backdropFilter: 'blur(5px)'
})

export const SubMenuArea = styled('div', {
    position: 'fixed',
    left: 0,
    width: '65%',
    height: '125%',
    background: '$primary',
    zIndex: 999999,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
})
export const SubMenu = styled('div', {
    zIndex: 999999,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center'
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
        color: 'GoldenRod'
    }
})

export const EmptyButton = styled('button', {
    background: 'none',
    outline: 'none',
    border: 'none',
    color: '$white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
    margin: '35px 15px 25px 10px',
})

export const SubMenuButton = styled('button', {
    position: 'fixed',
    top: '5%',
    right: '40%',
    zIndex: 999999999,
    background: 'none',
    outline: 'none',
    border: 'none',
    color: '$white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'right',
    transition: '0.25s linear',
    '&:hover': {
        color: 'GoldenRod',
        transform: 'rotate(180deg)'
    },
    // '@media only screen and (min-width: 650px)': {
    //   display: 'none',
    // },
})