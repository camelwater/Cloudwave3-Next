
import { globalCss } from '@stitches/react';

const globalStyle = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    // cursor: 'none !important',
    scrollBehavior: 'smooth',
  },
  html: {
    overflowX: 'hidden',
  },
  body: {
    background: '$background',
    overflowX: 'hidden',
    fontFamily: 'GTWalsheimPro',
  },
  '::selection': {
    background: '#f3f6f040'
  },
  img: {
    userSelect: 'none',
  },
  'body::-webkit-scrollbar': {
    width: 10,
  },
  'body::-webkit-scrollbar-track': {
    background: '$primary',
  },
  'body::-webkit-scrollbar-thumb': {
    background: '$scrollMain',
  },
  'body::-webkit-scrollbar-thumb:hover': {
    background: '$scrollMain2',
  },
  'code, pre': {
    fontFamily: '$mono',
  },
  ul: {
    marginLeft: 20,
  },
  '.invalid': {
    color: '#F16D6D !important',
  },
  '.disabled': {
    display: 'none !important',
  },
  '@font-face': {
    fontFamily: 'GTWalsheimPro',
    src: 'url(/GTWalsheimPro-Regular.ttf)',
    fontStyle: 'normal',
    fontWeight: 400,
    fontDisplay: 'swap',
  },
  '.ring.hovered': {
    width: 80,
    height: 80,
  },
});

export default globalStyle