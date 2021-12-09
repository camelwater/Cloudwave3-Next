import React from 'react';
import Head from 'next/head';
import { ContentWrapper } from '@css/stitches.config';
import globalStyle from '@css/global.style';
import 'animate.css/animate.min.css';
import SmoothScroll from '@components/Scroll';
import NavigationComponent from '@components/NavBar/Navigation';
import FooterComponent from '@components/Footer/Footer';
import AboutComponent from '@components/AboutPage/About/AboutComponent';
import { getMdContent } from '@lib/mdContent';



const AboutPage: React.FC<{ contentData: string }> = ({ contentData }) => {
    globalStyle();

    return (
        <ContentWrapper>
            <Head>
                <title>About - Cloudwave3</title>
            </Head>
            <SmoothScroll />
            <NavigationComponent />
            <AboutComponent contentData={contentData}/>
            <FooterComponent />
        </ContentWrapper>
    );
}

export const getStaticProps = async () => {
    const contentData = getMdContent('About');
    return {
        props: { contentData },
    }
}

export default AboutPage