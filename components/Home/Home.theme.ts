import { styled } from '@css/stitches.config'

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    maxHeight: 1280,
    '@media only screen and (min-width: 3000px)': {
      height: '100vh',
    },
    '@media only screen and (max-width: 1800px)': {
      height: '85vh',
    },
    '@media only screen and (max-width: 1280px)': {
      height: '75vh',
    },
  })

  export const IntroContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  })
  
  export const IntroText = styled('p', {
    color: '$main',
    fontSize: '$4',
    fontFamily: '$mono',
    maxWidth: '90vw',
    background: '$gradient',
    width: 'fit-content',
    display: 'inline-block',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    variants: {
      mono: {
        true: {
          fontFamily: '$mono',
        },
      },
    },
  })

export const NameText = styled('h1', {
    display: 'flex',
    width: 'fit-content',
    fontFamily: '$main',
    color: '$white',
    fontSize: 60,
    margin: '30px 0',
})