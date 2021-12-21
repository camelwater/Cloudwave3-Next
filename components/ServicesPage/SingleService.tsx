import React from 'react';
import * as Theme from './Services.theme'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

const SingleService: React.FC<{ mdContent, title: string, img: string, identifier: string }> = ({ mdContent, title, img, identifier }) => {

    let imgSrc = null;
    if (img !== null)  
        imgSrc = '/images/'+img; 
        
    return (
        <Theme.ServiceContentContainer id={identifier}>
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
            {imgSrc!==null && 
                <Theme.ImgBox style={{ width: '30vw', height: '20vw', marginLeft: '1vw', marginTop: 150 }}>
                 
                    <ParallaxProvider>
                        <Parallax x={[-15, 15]}>
                            <Image
                                priority
                                src={imgSrc}
                                height={450} 
                                width={550}
                                alt={img}
                            />
                        </Parallax>
                    </ParallaxProvider>
                </Theme.ImgBox>
            }
        </Theme.ServiceContentContainer>
    );
}

export default SingleService