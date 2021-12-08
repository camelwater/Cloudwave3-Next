import * as Theme from './Tools.theme';
import * as Icons from 'react-feather';
import ScrollAnimation from 'react-animate-on-scroll';
import React from 'react';

const ToolsComponent: React.FC = () => {
    
    const tools = [
        {
            name: 'Next',
            link: 'https://www.nextjs.org/'
        },
        {
            name: 'React',
            link: 'https://www.reactjs.org'
        },
        {
            name: 'Node',
            link: 'https://www.nodejs.org'
        },
        {
            name: 'Typescript',
            link: 'https://www.typescriptlang.org'
        },
        {
            name: 'Javascript',
            link: 'https://www.javascript.com'
        },
        {
            name: 'Feather',
            link: 'https://feathericons.com/'
        },
        {
            name: 'Stitches',
            link: 'https://www.stitches.dev'
        },
        {
            name: 'animate.css',
            link: 'https://www.animate.style'
        }
    ];

    return (
        <Theme.ToolsContainer id='tools'>
            <Theme.ToolsTextContainer>
                <ScrollAnimation 
                    animateIn='animate__bounceInRight' 
                    animateOnce={true}
                >
                    <Theme.ToolsTitle>Built with</Theme.ToolsTitle>
                </ScrollAnimation>

                <ScrollAnimation
                    animateIn='animate__flipInX'
                    animateOut='animate__flipOutX'
                    animateOnce={false}
                >
                    {/* <Theme.ToolsInfo>
                        This webpage was built using:
                    </Theme.ToolsInfo> */}
                </ScrollAnimation>

                <Theme.ToolsGrid>
                    {tools.map((tool, index) => (
                        <ScrollAnimation
                            animateIn='animate__flipInX'
                            animateOut='animate__flipOutX'
                            animateOnce={false}
                            key={index}
                        >
                            <Theme.ToolsGridText>
                                <Icons.Box style={{ margin: 5 }}/>
                                <Theme.ToolsTextLink href={tool.link} target='_blank'>{tool.name}</Theme.ToolsTextLink>
                            </Theme.ToolsGridText>
                        </ScrollAnimation>
                    ))}
                </Theme.ToolsGrid>
            </Theme.ToolsTextContainer>
        </Theme.ToolsContainer>
    );
}

export default ToolsComponent