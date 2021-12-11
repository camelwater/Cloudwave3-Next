import { styled } from '@css/stitches.config';

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    margin: '100px 100px',
    justifyContent: 'center',
    alignItems: 'center',
    '@iPadPro': {
        margin: '100px 0',
      },
})

export const ServiceContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 400,
    width: '100%',
    maxWidth: '100vw',
    '@iPadPro': {
        margin: '0 30px',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export const ServiceContentContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    margin: '0 -100px',
    // marginTop: -100,
    // width: 1000,
    width: '100%',
    maxWidth: '100vw',
    '@iPadPro': {
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
    fontSize: '$6',
    fontFamily: '$main',
    margin: '60px 0',
    alignText: 'center'
})

export const ImgBox = styled('div', {
    zIndex: 9,
    display: 'flex',
    position: 'relative',
    width: 600,
    '@media only screen and (max-width: 1350px)': {
      display: 'none',
    },
  })

export const mdContentContainer = styled('div', {

    color: '$white',
    display: 'flex',
    flexDirection: 'column',
    margin: '50px 100px',
    width: '100%',
    maxWidth: '35vw',
    zIndex: 99,
    '@iPadPro': {
        width: '100%',
        maxWidth: '50vw',
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
        fontSize: '$6',
        fontFamily: '$main',
        // margin: '60px 0',
        alignText: 'center'
    },
    h2: {
        marginTop: 100,
        marginBottom: 30,
        color: 'GoldenRod',
        fontSize: '$5'
    },
    h3: {
        marginTop: 35,
        marginBottom: 25,
        color: '$white',
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
        color: '$main2',
        fontSize: '$3',
        margin: '10px 0',
        zIndex: 999
    },
    img: {
        borderRadius: 10,
        maxWidth: '60vw',
    },
    a: {
        color: '#5CC2E5',
        position: 'relative',
        textDecoration: 'none',
        zIndex: 99,
        '&:before': {
            zIndex: 9,
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
            zIndex: 9,
            width: '100%',
            left: 0,
            background: '#5CC2E5',
        },
    },
  })