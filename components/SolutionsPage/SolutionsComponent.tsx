import React from 'react';
import SingleService from './SingleSolution';
import * as Theme from './Solutions.theme';
import ScrollAnimation from 'react-animate-on-scroll';

const SolutionComponent: React.FC<{ contentData }> = ({ contentData }) => {

    return (
        <Theme.Container>
            <Theme.SolutionContainer>
                <ScrollAnimation 
                    animateIn='animate__bounceInRight'
                    animateOnce={true}
                >
                    <Theme.TitleText>Solutions</Theme.TitleText>
                </ScrollAnimation>

                {contentData.map((solutionContent, index) => (
                    <SingleService mdContent={solutionContent.content} title={solutionContent.title} img={solutionContent.img} key={index} />
                ))}
            </Theme.SolutionContainer>
        </Theme.Container>
    );
}

export default SolutionComponent
