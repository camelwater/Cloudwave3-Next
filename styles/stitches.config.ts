import { createStitches } from '@stitches/react';
import globalStyle from './global.style';

export const { styled, getCssText, createTheme, globalCss } = createStitches({
    theme: {
      colors: {
        scrollMain: '#6B7C95',
        scrollMain2: '#8696AD',
        main: '#6B7C95',
        main2: '#8696AD',
        primary: '#37393E',
        dark: '#191919',
        white: '#F4F4F5',
        dropdownHover: '#050505',
        hover: 'GoldenRod',
        // hover: '#d4550c',
        dividerColor: '#eeae4d',
        background: '#191919',
        navBackground: '#171717',
        dropdownBackground: '#141414',
        dropdownBorder: '#303030',
        lightBorder: '#141414',
        highlight: '#f3f6f040',
        gradient:
          'linear-gradient(93.05deg, #EF9797 3.98%, rgba(206, 126, 199, 0.801616) 35.29%, #A364D6 68.78%, #A1D0F9 97.44%)',
      },
      fontSizes: {
        1: '14px',
        2: '18px',
        3: '20px',
        4: '24px',
        5: '36px',
        6: '48px',
      },
      fonts: {
        main: 'GTWalsheimPro, sans-serif',
        mono: 'JetBrains Mono, monospace',
      },
    },
    media: {
      iPadPro: '(max-width: 1024px)',
      iPad: '(max-width: 768px)',
      Flip: '(max-width: 600px)',
      iPhonePlus: '(max-width: 414px)',
      iPhone: '(max-width: 375px)',
      iPhoneSE: '(max-width: 320px)',
      dark: "(prefers-color-scheme: dark)"
    },
})

export const lightTheme = createTheme(({
  colors: {
    scrollMain: '#5a636e',
    scrollMain2: '#363c44',
    main: '#36414e',
    main2: '#556275',
    primary: '#e2e2e2',
    dark: '#F4F4F5',
    white: '#313131',
    background: '#eeeeee',
    navBackground: '#f1f1f1',
    lightBorder: '#e4e4e4',
    dropdownBackground: '#f5f5f5',
    dropdownBorder: '#e0e0e0',
    hover: '#4c2bce',
    dividerColor: '#785af1',
    dropdownHover: '#e9e9e9',
    highlight: '#2e2e2e30',
    gradient:
      'linear-gradient(93.05deg, #EF9797 3.98%, rgba(206, 126, 199, 0.801616) 35.29%, #A364D6 68.78%, #A1D0F9 97.44%)',
  }, 
}))


export const ContentWrapper = styled('div', {
  position: 'relative',
  overflow: 'hidden',
})

export const globalStyles = globalCss({
  "@light": {
    ":root:not(.dark)": {
      ...Object.keys(lightTheme.colors).reduce((varSet, currentColorKey) => {
        const currentColor = lightTheme.colors[currentColorKey];
        const currentColorValue =
          currentColor.value.substring(0, 1) === "$"
            ? `$colors${currentColor.value}`
            : currentColor.value;

        return {
          [currentColor.variable]: currentColorValue,
          ...varSet,
        };
      }, {}),
    },
  },
});

globalStyles();

globalStyle();