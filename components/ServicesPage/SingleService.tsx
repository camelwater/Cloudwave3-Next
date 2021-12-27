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
            <Theme.mdContentContainer variant={img===null?'normal':'img'}>
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
            {imgSrc!==null && (
                identifier === "cloud-advisory" ? (
                    <Theme.ImgBox img='cloud'>
                        <Parallax x={[12, -12]}>
                            <Image
                                priority
                                src={imgSrc}
                                height={500} 
                                width={500}
                                alt={img}
                            />
                        </Parallax>
                    </Theme.ImgBox>
                ) : (
                    <Theme.ImgBox variant='dontKeep' style={{ width: '35vw', height: '20vw', marginLeft: '1vw', marginTop: 75 }}>
                        <Parallax x={[-10, 10]}>
                            <Image
                                priority
                                src={imgSrc}
                                height={500} 
                                width={700}
                                alt={img}
                            />
                        </Parallax>
                    </Theme.ImgBox>
                )
            )}

                
        </Theme.ServiceContentContainer>
    );
}

export default SingleService