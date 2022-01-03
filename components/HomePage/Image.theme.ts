import { styled } from '@css/stitches.config';


export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    marginBottom: '25vw',
    // maxHeight: 1280,
    '@media only screen and (min-width: 3000px)': {
      height: '100vh',
    },
    '@media only screen and (max-width: 1800px)': {
      height: '90vh',
    },
    '@media only screen and (max-width: 1280px)': {
      height: '90vh',
    },
})

export const ImgContainer = styled('div', {
    display: 'flex',
    width: '50vw',
    height: '35vw',
    // marginTop: '250px',
    justifyContent: 'center',
    '@iPadPro': {
        width: '65vw',
        height: '50vw'
    }
  })