import React from 'react';
import * as Theme from './Solutions.theme'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

const SingleSolution: React.FC<{ mdContent, title: string, img: string, identifier: string }> = ({ mdContent, title, img, identifier }) => {

    let imgSrc = null;
    if (img !== null)  
        imgSrc = '/images/'+img; 
        
    return (
        <Theme.SolutionContentContainer id={identifier}>
            
            {img!==null && (
                img==="blocks_eth-blocks.png" ?
                // <Theme.ImgBox style={{ width: 1200, height: 650, marginLeft: `${35}vw`, marginTop: 75, position: 'absolute' }}>
                <Theme.ImgBox style={{ width: 4000, height: 700, marginLeft: '-25vw', marginRight: '-35vw', marginTop: 75}}>
                    <ParallaxProvider>
                        <Theme.ImgBox style={{ width: 1200, marginLeft: -85, marginTop: 50, position: 'absolute'}}>
                            <Parallax x={ [-7, 7] }>
                                <Image
                                    priority
                                    src={'/images/hand_eth-blocks.png'}
                                    height={650}
                                    width={1200}
                                    alt={'hand'}
                                />
                            </Parallax>
                        </Theme.ImgBox>
                    </ParallaxProvider>
                    <Image
                        priority
                        src={imgSrc}
                        height={500}
                        width={1250}
                        alt={img}
                    />  
                </Theme.ImgBox>
            :
                <Theme.ImgBox style={{ width: '75vw', height: 350, marginLeft: '-7vw', marginRight: '7vw', marginTop: 175 }}>
                    {/* <ParallaxProvider>
                        <Parallax x={[-35, 35]}> */}
                            <Image
                                priority
                                src={imgSrc}
                                height={350}
                                width={'550vw'}
                                alt={img}
                            />
                        {/* </Parallax>
                    </ParallaxProvider> */}
                </Theme.ImgBox>
            )}
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
        </Theme.SolutionContentContainer>
    );
}

export default SingleSolution