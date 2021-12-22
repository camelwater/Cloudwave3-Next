import { useEffect, useState } from "react";
import { useTheme } from 'next-themes';
import * as Icons from 'react-feather';
import { styled } from '@stitches/react';

const StyledButton = styled('button', {
    background: 'none',
    outline: 'none',
    border: 'none',
    color: '$main',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '0.25s linear',
    '&:hover': {
        color: '$hover',
    },
    variants: {
        variant: {
            desktop: {
                '@media (max-width: 700px)': {
                    display: 'none',
                }
            },
            mobile: {
                '@media (min-width: 700px)': {
                }
            }
        }
    }
})
export const ThemeToggle: React.FC<{ type: string }> = ({type}) => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();
  
    useEffect(() => setMounted(true), []);
  
    if (!mounted) return null;
  
    const toggleTheme = () => {
      const targetTheme = resolvedTheme === "light" ? "dark" : "light";
  
      setTheme(targetTheme);
    };

    return (
      <StyledButton variant={type} onClick={toggleTheme}>
        { resolvedTheme === 'light'? <Icons.Moon /> : <Icons.Sun /> }
      </StyledButton>
    );
}