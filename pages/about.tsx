import React from 'react';
import Head from 'next/head';
import { ContentWrapper } from '@css/stitches.config';
import globalStyle from '@css/global.style';
import 'animate.css/animate.min.css';
import SmoothScroll from '@components/Scroll';
import NavigationComponent from '@components/Nav/Navigation';
import FooterComponent from '@components/Footer/Footer';
import AboutComponent from '@components/AboutPage/About/AboutComponent';
import { getMdContent } from '@lib/readMd';


const AboutPage: React.FC<{ mdContent: string }> = ({ mdContent }) => {

    return (
        <ContentWrapper>
            <Head>
                <title>About | Cloudwave3</title>
            </Head>
            <SmoothScroll />
            <NavigationComponent />
            <AboutComponent contentData={ mdContent }/>
            <FooterComponent />
        </ContentWrapper>
    );
}

export async function getStaticProps () {
    const mdContent = getMdContent('AboutContent');
    return {
        props: { mdContent }
    };
}

export default AboutPage