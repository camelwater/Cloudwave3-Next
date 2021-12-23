import '@components/Nav/NavMenu.css';
import { ThemeProvider } from 'next-themes';
import { lightTheme } from '@css/stitches.config';

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
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

