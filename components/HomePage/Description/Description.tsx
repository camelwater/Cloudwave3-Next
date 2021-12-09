import * as Theme from './Description.theme';
import ScrollAnimation from 'react-animate-on-scroll';
import * as Icons from 'react-feather';
import React from 'react';


const DescriptionComponent: React.FC = () => {
    const stuff = [
        'Python',
        'Javascript',
        'Typescript',
        'Rust',
        'Discord.py',
        'Node',
        'React/Next',
        'Neural Networks'
    ];


    return (
        <Theme.DesContainer id='description'>
            <Theme.DescTextContainer>
                <ScrollAnimation animateIn='animate__bounceInRight' animateOnce={true}>
                    <Theme.DescTitleText>Technologies</Theme.DescTitleText>
                </ScrollAnimation>

                <ScrollAnimation animateIn='animate__bounceInUp' animateOnce={true}>
                    <Theme.DescText>
                        This is some filler text. I don&apos;t know what is being written here.
                        If you know what is being written here, good job.
                        </Theme.DescText>
                </ScrollAnimation>

                <ScrollAnimation animateIn='animate__flipInX' animateOnce={true}>
                    <Theme.DescText>Cutting-edge? technologies that people are probably using:</Theme.DescText>
                </ScrollAnimation>
                
                <Theme.StuffContainer>
                    {stuff.map((thing, index) => (
                        <ScrollAnimation animateIn='animate__flipInX' animateOnce={true} key={index}>
                            <Theme.StuffText>
                                <Icons.ArrowRightCircle style={{ marginRight: 7 }} />
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