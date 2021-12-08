import * as Theme from './Home.theme';
import ScrollAnimation from 'react-animate-on-scroll';
import React from 'react';

const HomeComponent: React.FC = () => {
    return (
        <Theme.Container id='home'>
            <Theme.IntroContainer>
                <ScrollAnimation
                    animateIn='animate__bounceInLeft'
                    delay={200}
                    animateOnce={true}
                >
                    <Theme.NameText>Cloudwave3</Theme.NameText>
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn='animate__flipInX'
                    animateOnce={true}
                    delay={200}
                >
                    <Theme.IntroText>A company that&apos;s doing stuff</Theme.IntroText>
                </ScrollAnimation>
            </Theme.IntroContainer>
        </Theme.Container>
    );
}

export default HomeComponent