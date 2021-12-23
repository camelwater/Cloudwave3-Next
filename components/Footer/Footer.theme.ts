import { styled } from '@css/stitches.config';

export const Footer = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 999,
    '@media only screen and (min-width: 1024px)': {
      marginRight: 25,
      marginLeft: 25,
      marginBottom: 15
    },
    '@iPadPro': {
      flexDirection: 'column',
      justifyContent: 'center',
      margin: 25
    },
})

export const FooterContainer = styled('div', {
    display: 'flex',
    alignItems: 'center'
})

export const LinkText = styled('a', {
    fontFamily: '$mono', 
    display: 'flex',
    fontSize: '$1',
    textDecoration: 'none',
    color: '$main2',
    marginRight: 15,
    transition: '0.15s linear',
    '&:hover': {
        color: '$hover',
        transform: 'scale(1.05, 1.05)'
    },  
    '@iPhonePlus': {
        fontSize: 12
    },
    '@iPhone': {
        fontSize: 10
    },
    '@iPhoneSE': {
        fontSize: 8
    }
})

export const FooterText = styled('p', {
    fontFamily: '$mono', 
    display: 'flex',
    fontSize: '$2',
    alignItems: 'center',
    color: '$main',
    svg: {
        margin: '0 10px'
    },
    '@iPhone': {
        fontSize: '$1'
    }
})