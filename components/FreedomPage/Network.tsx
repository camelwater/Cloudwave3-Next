import React from 'react';
import * as Theme from './Network.theme';
import ReactMarkdown from 'react-markdown';
import ScrollAnimation from 'react-animate-on-scroll';

const NetworkComponent: React.FC<{ mdContent: string }> = ({ mdContent }) => {

    return (
        <Theme.NetworkContainer>
            <Theme.mdContentContainer>
                <ScrollAnimation
                        animateIn='animate__bounceInRight'
                        animateOnce={true}
                    >
                    <Theme.TitleText>Freedom Network: A Metaverse Prototype</Theme.TitleText>
                </ScrollAnimation>

                <ScrollAnimation
                    animateIn='animate__zoomIn'
                    animateOnce={true}
                    delay={500}
                >
                    <ReactMarkdown>
                        {mdContent}
                    </ReactMarkdown>
                </ScrollAnimation>
            </Theme.mdContentContainer>
        </Theme.NetworkContainer>
    );
}

export default NetworkComponent