import * as Theme from './Home.theme';
import ScrollAnimation from 'react-animate-on-scroll';

const HomeComponent = () => {
    return (
        <Theme.Container id='home'>
            <Theme.IntroContainer>
                <ScrollAnimation
                    animateIn='animate__flipInX'
                    animateOnce={true}
                    delay={200}
                >
                    <Theme.IntroText>My name is</Theme.IntroText>
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn='animate__bounceInLeft'
                    delay={200}
                    animateOnce={true}
                >
                    <Theme.NameText>Ryan Zhao</Theme.NameText>
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn='animate__flipInX'
                    animateOnce={true}
                    delay={200}
                >
                    <Theme.IntroText>Hello</Theme.IntroText>
                </ScrollAnimation>
            </Theme.IntroContainer>
        </Theme.Container>
    );
}

export default HomeComponent