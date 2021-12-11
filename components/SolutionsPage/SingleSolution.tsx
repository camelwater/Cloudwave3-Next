import React from 'react';
import * as Theme from './Solutions.theme'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

const SingleSolution: React.FC<{ mdContent, title: string, img: string }> = ({ mdContent, title, img }) => {

    let imgSrc = null;
    if (img !== null)  
        imgSrc = '/images/'+img; 
        
    return (
        <Theme.SolutionContentContainer>
            <Theme.mdContentContainer>
                <ScrollAnimation
                    animateIn='animate__flipInX'
                    animateOnce={true}
                    animatePreScroll={false}
                >
                    <h2>{title}</h2>
                </ScrollAnimation>
                <ScrollAnimation
                    animateIn='animate__zoomIn'
                    animateOnce={true}
                    animatePreScroll={false}
                    delay={0}
                > 
                    <ReactMarkdown>
                        {mdContent}
                    </ReactMarkdown>
                </ScrollAnimation>
            </Theme.mdContentContainer>
            <Theme.ImgBox style={{ width: 600, marginLeft: '1vw', marginTop: 250 }}>
                 {imgSrc!==null && 
                    <ParallaxProvider>
                        <Parallax x={[-50, 25]}>
                            <Image
                                priority
                                src={imgSrc}
                                height={450}
                                width={500}
                                alt={img}
                            />
                        </Parallax>
                    </ParallaxProvider>
                }
            </Theme.ImgBox>
        </Theme.SolutionContentContainer>
    );
}

export default SingleSolution