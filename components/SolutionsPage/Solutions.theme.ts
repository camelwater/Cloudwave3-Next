import { styled } from '@css/stitches.config';
import Image from 'next/image';

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    // margin: '100px 100px',
    marginTop: 100,
    marginBottom: 100,
    justifyContent: 'center',
    // alignItems: 'center',
    '@iPadPro': {
        margin: '100px 0',
        alignItems: 'center'
      },
})

export const SolutionContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    // marginLeft: '10vw',
    // marginRight: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignText: 'left',
    width: '100%',
    maxWidth: '100vw',
    '@iPadPro': {
        margin: '0 30px',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export const SolutionContentContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // borderTop: '1px solid $main',
    justifyContent: 'space-between',
    alignItems: 'center',   
    // marginTop: 100,
    width: '100%',
    maxWidth: '75vw',
    '@iPadPro': {
        maxWidth: '80w',
        margin: '0 30px',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
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
    margin: '60px 0 10rem 13vw',
    '@iPadPro': {
        margin: '60px 0'
    }    
})

export const BaseImgContainer = styled('div', {
    zIndex: 9,
    display: 'flex',
    position: 'relative',   
})

export const ImgContainer = styled('div', {
    zIndex: 9,
    display: 'flex',
    position: 'relative',  
    width: '30vw',
    height: '20vw', 
    marginTop: 150, 
    marginLeft: '3vw',
    '@iPadPro': {
        margin: '0',
        marginBottom: '2.5rem',
        width: '60vw',
        height: '40vw'
    }
})

export const ParallaxBackgroundImgContainer = styled(BaseImgContainer, {
    width: '27vw', 
    height: '25vw', 
    marginLeft: '5vw',
    maxWidth: '500px',
    maxHeight: '450px',
    '@iPadPro': {
        width: '60vw',
        height: '52vw',
        marginBottom: '1.5rem'
    }

})

export const ParallaxImgContainer = styled(BaseImgContainer, {
    width: '30vw', 
    height: '25vw', 
    left: '-12vw', 
    marginTop: '4vw', 
    position: 'relative',
    maxWidth: '500px',
    maxHeight: '450px',
    '@iPadPro': {
        left: '-27.5vw',
        marginTop: '9vw',
        width: '65vw',
        height: '55vw'
    },
    '@media (min-width: 2100px)': {
        left: '-14rem',
        marginTop: '4.5rem'
    }
})
 
export const SImage = styled (Image, {
    width: '100%',
    backgroundSize: 'cover',
    background: 'no-repeat 50px'
})

export const mdContentContainer = styled('div', {
    color: '$white',
    display: 'flex',
    flexDirection: 'column',
    margin: '0px 0px 0px 3vw',
    // marginBottom: 50,
    zIndex: 99,
    width: '100%',
    variants: {
        variant: {
            noImg: {
                maxWidth: '40vw',
                '@iPadPro': {
                    maxWidth: '75vw'
                }
            },
            img: {
                maxWidth: '35vw',
                '@iPadPro': {
                    maxWidth: '75vw'
                }
            }
        }
    },
    '@iPadPro': {
        // margin: '0 30px',
        width: '85%',
        margin: '0',
        marginBottom: 100,
        justifyContent: 'center',
        alignItems: 'center',   
    },
    'h1, h2, h3, h4, h5, h6, h7, p, a, strong': {
        fontFamily: '$main',
    },
    'h1, pre': {
        margin: '0px 0',
        display: 'inline-block',
        background: '$gradient',
        width: 'fit-content',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontSize: '$6',
        fontFamily: '$main',
        alignText: 'left'
    },
    h2: {
        // marginTop: 100,
        marginBottom: 30,
        color: '$hover',
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
        margin: '10px 0 15px 0',
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

export const mdPictureContentContainer = styled(mdContentContainer, {
    maxWidth: '35vw',
    zIndex: 99,
    '@iPadPro': {
        width: '100%',
        maxWidth: '50vw',
        margin: '0 30px',
        marginBottom: 100,
        justifyContent: 'center',
        alignItems: 'center',   
    },
})