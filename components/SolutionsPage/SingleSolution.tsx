import React from 'react';
import * as Theme from './Solutions.theme'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { CenterDivider } from '@components/SharedComponents';

const SingleSolution: React.FC<{ mdContent, title: string, img: string, identifier: string, idx: number }> = ({ mdContent, title, img, identifier, idx }) => {

    let imgSrc = null;
    if (img !== null)  
        imgSrc = '/images/'+img; 
        
    return (
        <>
            <CenterDivider variant={idx==0?"first": "rest"}/>
            <Theme.SolutionContentContainer id={identifier}>
                
                {img!==null && (
                    img==="blocks_eth-blocks.png" ?
                    <Theme.ParallaxBackgroundImgContainer>
                        <Image
                            priority
                            src={imgSrc}
                            // height='450%'
                            // width='575%'
                            layout='fill'
                            alt={img}

                        />
                            <Theme.ParallaxImgContainer>
                                <Parallax x={ [-10, 10] }>
                                    <Image
                                        priority
                                        src={'/images/hand_eth-blocks.png'}
                                        height={'425%'}
                                        width={'500%'}
                                        alt={'hand'}
                                    />
                                </Parallax>
                            </Theme.ParallaxImgContainer>
                    </Theme.ParallaxBackgroundImgContainer>
                :
                    <Theme.ImgContainer>
                        {/* <ParallaxProvider>
                            <Parallax x={[-35, 35]}> */}
                                <Theme.SImage
                                    priority
                                    layout='fill'
                                    src={imgSrc}
                                    alt={img}
                                />
                            {/* </Parallax>
                        </ParallaxProvider> */}
                    </Theme.ImgContainer>
                )}
                <Theme.mdContentContainer variant={img===null?"noImg":"img"}>
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
        </>
    );
}

export default SingleSolution