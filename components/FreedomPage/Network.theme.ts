import { styled } from '@css/stitches.config';

export const NetworkContainer = styled('div', {
    display: 'flex',
    margin: '100px 100px',
    justifyContent: 'center',
    alignItems: 'center',
    '@iPadPro': {
        margin: '100px 0',
      },
})

export const TitleContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 100px',
    width: 1000,
    maxWidth: '100vw',
    '@iPadPro': {
        width: '80%',
        margin: '0 30px',
        justifyContent: 'center',
        alignItems: 'center',   
      },
})

export const TitleText = styled('h1', {
    display: 'inline-block',
    background: '$gradient',
    width: 'fit-content',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '$5',
    fontFamily: '$main',
    margin: '60px 0',
    alignText: 'center'
})

export const mdContentContainer = styled('div', {

    color: '$white',
    display: 'flex',
    flexDirection: 'column',
    margin: '50px 100px',
    width: 1000,
    maxWidth: '100vw',
    '@iPadPro': {
        width: '80%',
        margin: '0 30px',
        justifyContent: 'center',
        alignItems: 'center',   
    },
    'h1, h2, h3, h4, h5, h6, h7, p, a, strong': {
        fontFamily: '$main',
    },
    'h1, pre': {
        margin: '30px 0',
        display: 'inline-block',
        background: '$gradient',
        width: 'fit-content',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '$5',
        fontFamily: '$main',
        // margin: '60px 0',
        alignText: 'center'
    },
    h2: {
        marginTop: 50,
        marginBottom: 30,
        color: '$main2',
        fontSize: '$4'
    },
    pre: {
        borderRadius: 12,
        width: '100%',
        '@Flip': {
            maxWidth: '90vw',
        },
    },
    code: {},
    p: {
        fontSize: '$3',
        margin: '10px 0',
    },
    img: {
        borderRadius: 10,
        maxWidth: '60vw',
    },
    a: {
        color: '#5CC2E5',
        position: 'relative',
        textDecoration: 'none',
        '&:before': {
            content: '',
            width: 0,
            height: '0.075em',
            position: 'absolute',
            bottom: -1,
            left: 0,
            background: '#5CC2E5',
            transition: '0.3s all',
        },
        '&:hover:before': {
            width: '100%',
            left: 0,
            background: '#5CC2E5',
        },
    },
  })