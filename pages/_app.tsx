import '@components/Nav/NavMenu.css';
import { ThemeProvider } from 'next-themes';
import { lightTheme } from '@css/stitches.config';
import { ParallaxProvider } from 'react-scroll-parallax';

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider
            attribute='class'
            defaultTheme='system'
            value={{
                light: lightTheme.className,
                dark: "dark",
            }}
        >   
            <ParallaxProvider>
                <Component {...pageProps} />
            </ParallaxProvider>
        </ThemeProvider>
    );
}

