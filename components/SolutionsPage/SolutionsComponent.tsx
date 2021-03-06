import React from 'react';
import SingleSolution from './SingleSolution';
import * as Theme from './Solutions.theme';
import ScrollAnimation from 'react-animate-on-scroll';

const SolutionComponent: React.FC<{ contentData }> = ({ contentData }) => {

    return (
        <Theme.Container>
            <ScrollAnimation 
                    animateIn='animate__bounceInRight'
                    animateOnce={true}
            >
                <Theme.TitleText>Solutions</Theme.TitleText>
            </ScrollAnimation>
            <Theme.SolutionContainer>
                {contentData.map((solutionContent, index) => (
                    <SingleSolution 
                        mdContent={solutionContent.content} 
                        title={solutionContent.title} 
                        identifier={solutionContent.id}
                        img={solutionContent.img}
                        idx={index}
                        key={index}
                    />
                ))}
            </Theme.SolutionContainer>
        </Theme.Container>
    );
}

export default SolutionComponent
