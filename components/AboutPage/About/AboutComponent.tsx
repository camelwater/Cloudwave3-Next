import React from 'react';
import * as Theme from './About.theme';
import ScrollAnimation from 'react-animate-on-scroll';
import * as Content from '@content/AboutContent';


const AboutComponent: React.FC = () => {

    return (
        <Theme.AboutContainer>
            <Theme.AboutTextContainer>
                <ScrollAnimation animateIn='animate__bounceInRight' animateOnce={true}>
                    <Theme.TitleText>About us</Theme.TitleText>
                </ScrollAnimation>
                <ScrollAnimation animateIn='animate__zoomIn' animateOnce={true} delay={500}>
                    {Content.content.map((text, index) => (
                        <Theme.AboutText key={index}>
                            {text}
                        </Theme.AboutText>
                    ))}
                </ScrollAnimation>
            </Theme.AboutTextContainer>
        </Theme.AboutContainer>
    );
}

export default AboutComponent