import { styled } from "@css/stitches.config";

export const AboutContainer = styled('div', {
    display: 'flex',
    margin: '100px 100px',
    justifyContent: 'center',
    alignItems: 'center',
    '@iPadPro': {
        margin: '100px 0',
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

// export const AboutText = styled('p', {
//     fontFamily: '$main',
//     color: '$white',
//     fontSize: '$3',
//     marginBottom: 40,
//     '@iPadPro': {
//         width: '100%',
//         fontSize: '$2',
//     },
// })

export const AboutTextContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    color: '$white',
    margin: '0 100px',
    width: 900,
    maxWidth: '100vw',
    '@iPadPro': {
        width: '80%',
        margin: '0 30px',
        justifyContent: 'center',
        alignItems: 'center',   
      },

    p: {
        fontSize: '$3',
        marginBottom: 40,
        '@iPadPro': {
            width: '100%',
            fontSize: '$2',
        },
    }
})