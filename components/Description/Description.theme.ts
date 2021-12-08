import { styled } from '@css/stitches.config';

export const DesContainer = styled('div', {
    display: 'flex',
    margin: '100px 100px',
    justifyContent: 'center',
    alignItems: 'center',
    '@iPadPro': {
        margin: '100px 0',
      },
})

export const DescTextContainer = styled('div', {
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

export const StuffContainer = styled('div', {
    display: 'grid',
    gap: '1.5rem',
    columnGap: '2.5rem',
    width: 350,
    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 0fr))',
    marginBottom: 50,
    '@iPadPro': {
        width: 100,
        gap: '1.0rem',
        columnGap: '1.75rem',
        gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 0fr))',
    },
})

export const DescTitleText = styled('h1', {
    display: 'inline-block',
    background: '$gradient',
    width: 'fit-content',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '$5',
    fontFamily: '$main',
    margin: '60px 0'
})

export const DescText = styled('p', {
    fontFamily: '$main',
    color: '$white',
    fontSize: '$3',
    marginBottom: 40,
    '@iPadPro': {
        width: '100%',
        fontSize: '$2',
    },
})

export const StuffText = styled('div', {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    fontFamily: '$main',
    color: '$white',
    fontSize: '$3',
    width: 350,
    '@iPadPro': {
        font: '$2',
    },
})
