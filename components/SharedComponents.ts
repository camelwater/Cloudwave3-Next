import { styled } from '@css/stitches.config';

export const Divider = styled('div', {
    marginBottom: '10rem',
    marginTop: '10rem',
    width: '10%',
    height: '0.25rem',
    backgroundColor: '$dividerColor',
    '@media screen and (max-width: 700px)': {
        width: '15%',
    },
    variants: {
        variant: {
            first: {
                display: 'none'
            },
            rest: {
                
            }
        }
    }
})

export const CenterDivider = styled(Divider, {
    justifyContent: 'center',
    variants: {
        variant: {
            first: {
                display: 'none'
            },
            rest: {
                display: 'flex'
            }
        }
    }
})