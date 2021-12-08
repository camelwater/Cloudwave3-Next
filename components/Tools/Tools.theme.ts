import { styled } from '@css/stitches.config';

export const ToolsContainer = styled('div', {
    display: 'flex',
    margin: '100px 100px',
    justifyContent: 'center',
    alignItems: 'center',
    '@iPadPro': {
        margin: '100px 0',
      },
})

export const ToolsTextContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 100px',
    width: 600,
    marginRight: 400,
    maxWidth: '100vw',
    '@iPadPro': {
        margin: '0 30px',
        justifyContent: 'center',
        alignItems: 'center',
      },
})

export const ToolsGrid = styled('div', {
    display: 'grid',
    gap: '1.0rem',
    width: 200,
    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 0fr))',
    marginBottom: 50,
    '@iPadPro': {
        width: '100%',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 0fr))',
    },
})

export const ToolsTitle = styled('h1', {
    display: 'inline-block',
    background: '$gradient',
    width: 'fit-content',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '$5',
    fontFamily: '$main',
    margin: '45px 0'
})

export const ToolsInfo = styled('p', {
    fontFamily: '$main',
    color: '$white',
    fontSize: '$3',
    marginBottom: 40
})

export const ToolsGridText = styled('div', {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    fontFamily: '$main',
    color: '$white',
    fontSize: '$2',
    width: 150,
    '@iPadPro': {
        font: '$2'
    }
})

export const ToolsTextLink = styled('a', {
    textDecoration: 'none',
    color: '$white',
    transition: '0.1s linear',
    margin: '0 10px',
    '&:hover': {
      color: '$main',
      transform: 'scale(1.1, 1.1)',
    },
  })
