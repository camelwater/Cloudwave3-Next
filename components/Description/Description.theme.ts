import { styled } from '@css/stitches.config'

export const DesContainer = styled('div', {
    display: 'flex',
    margin: '100px 100px',
    justifyContent: 'center',
    alignItems: 'center',
})

export const DescTextContainer = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 100px',
    width: 600,
    marginRight: 400,
    maxWidth: '100vw',
})

export const StuffContainer = styled('div', {
    display: 'grid',
    gap: '1.5rem',
    columnGap: '3.5rem',
    width: 400,
    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 0fr))',
    marginBottom: 50
})

export const DescTitleText = styled('h2', {
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
    marginBottom: 40
})

export const StuffText = styled('div', {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    fontFamily: '$main',
    color: '$white',
    fontSize: '$4',
    width: 500
})
