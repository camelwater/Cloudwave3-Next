import React from 'react';
import * as Theme from './About.theme';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactMarkdown from 'react-markdown';

const AboutComponent: React.FC<{ contentData: string }> = ({ contentData }) => {

    return (
        <Theme.AboutContainer>
            <Theme.AboutTextContainer>
                <ScrollAnimation animateIn='animate__bounceInRight' animateOnce={false}>
                    <Theme.TitleText>About us</Theme.TitleText>
                </ScrollAnimation>
                <ScrollAnimation animateIn='animate__zoomIn' animateOnce={false} delay={500}>
                    <ReactMarkdown>
                        {contentData}
                    </ReactMarkdown>
                </ScrollAnimation>
            </Theme.AboutTextContainer>
        </Theme.AboutContainer>
    );
}

export default AboutComponent