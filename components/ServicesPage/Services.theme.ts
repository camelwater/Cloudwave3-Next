import { styled as sstyled } from '@css/stitches.config';

export const Container = sstyled('div', {
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

export const ServiceContainer = sstyled('div', {
    display: 'flex',
    flexDirection: 'column',
    // marginLeft: 400,
    width: '100%',
    maxWidth: '100vw',
    justifyContent: 'center',
    alignItems: 'center',
    alignText: 'left',
    '@iPadPro': {
        margin: '0 30px',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export const SingleServiceContainer = sstyled('div', {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '85vw',
    width: '100%',
    marginLeft: '5vw',
    '@iPadPro': {
        marginLeft: '0',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export const ServiceContentContainer = sstyled('div', {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    // margin: '0 -100px',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    '@iPadPro': {
        // margin: '0 30px',
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export const TitleText = sstyled('h1', {
    display: 'inline-block',
    background: '$gradient',
    width: 'fit-content',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '$6',
    fontFamily: '$main',
    margin: '60px 0 7rem 13vw',
    '@iPadPro': {
        margin: '60px 0 10rem'
    }    
})

export const ImgBox = sstyled('div', {
    zIndex: 9,
    display: 'flex',
    // position: 'relative',
    width: 600,
    variants: {
        img: {
            cloud: {
                marginTop: 150,
                width: '30vw', 
                height: '30vw', 
                marginRight: '3vw',
                '@iPadPro': {
                    marginTop: 75,
                    width: '45vw',
                    height: '45vw',
                    marginRight: 0
                }
            }
        },
        variant: {
            dontKeep: {
                '@iPadPro': {
                    display: 'none',
                },
            }
        }
    }  
})


export const mdContentContainer = sstyled('div', {
    color: '$white',
    display: 'flex',
    flexDirection: 'column',
    // margin: '50px 100px',
    // marginLeft: '5vw',
    width: '100%',
    variants: {
        variant: {
            normal: {
                maxWidth: '45vw',
                '@iPadPro': {
                    maxWidth: '75vw'
                }
            },
            img: {
                maxWidth: '40vw',
                '@iPadPro': {
                    maxWidth: '75vw'
                }
            }
        }
    },
    zIndex: 99,
    '@iPadPro': {
        width: '85%',
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
        // marginTop: 100,
        marginBottom: 30,
        color: '$hover',
        fontSize: '$5',
    },
    h3: {
        marginTop: 35,
        marginBottom: 25,
        color: '$white',
        fontSize: '$4',
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
        zIndex: 999,
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