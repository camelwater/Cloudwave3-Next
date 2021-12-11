// mobile
import { styled } from '@css/stitches.config';


export const MenuContainer = styled('div', {
    zIndex: 9999,
    position: 'fixed',
    top: 0,
    height: '100%',
    width: '100%',
    background: '#2A2A2A90',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export const ProxyMenuContainer = styled('div', {
    zIndex: 99999,
    position: 'fixed',
    top: 0,
    height: '100vh',
    width: '100vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export const Menu = styled('div', {
    width: 280,
    height: 300,
    background: '$primary',
    zIndex: 999999,
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
    textDecoration: 'none',
    color: '$white',
    fontSize: '$3',
    fontFamily: '$main',
    margin: '0 0 10px 30px',
    transition: '0.25s linear',
    '&:hover': {
        color: 'GoldenRod'
    }
  })
