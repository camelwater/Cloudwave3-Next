import * as Theme from './Description.theme';
import ScrollAnimation from 'react-animate-on-scroll';
import * as Icons from 'react-feather'


const DescriptionComponent = () => {
    const stuff = [
        'Python',
        'Javascript',
        'Typescript',
        'Rust',
        'Discord.py',
        'Node',
        'React/Next',
        'Neural Networks (DNN, CNN, RNN)'
    ];


    return (
        <Theme.DesContainer id='description'>
            <Theme.DescTextContainer>
                <ScrollAnimation animateIn='animate__bounceInRight' animateOnce={true}>
                    <Theme.DescTitleText>Who?</Theme.DescTitleText>
                </ScrollAnimation>

                <ScrollAnimation animateIn='animate__bounceInUp' animateOnce={true}>
                    <Theme.DescText>I&apos;m Ryan Zhao, a high school student who&apos;s learning stuff.</Theme.DescText>
                </ScrollAnimation>

                <ScrollAnimation animateIn='animate__flipInX' animateOnce={true}>
                    <Theme.DescText>Some things I&apos;ve been learning:</Theme.DescText>
                </ScrollAnimation>
                
                <Theme.StuffContainer>
                    {stuff.map((thing, index) => (
                        <ScrollAnimation animateIn='animate__flipInX' animateOnce={true} key={index}>
                            <Theme.StuffText>
                                <Icons.ArrowRightCircle style={{ marginRight: 5 }} />
                                {thing}
                            </Theme.StuffText>
                        </ScrollAnimation>
                    ))}
                </Theme.StuffContainer>

            </Theme.DescTextContainer>
        </Theme.DesContainer>
    );
}

export default DescriptionComponent