import React from 'react';
import Head from 'next/head';
import { ContentWrapper } from '@css/stitches.config';
import globalStyle from '@css/global.style';
import 'animate.css/animate.min.css';
import SmoothScroll from '@components/Scroll';
// import * as Content from '@content/ServicesContent';
import NavigationComponent from '@components/NavBar/Navigation';
import FooterComponent from '@components/Footer/Footer';
import AboutComponent from '@components/AboutPage/About/AboutComponent';


const AboutPage: React.FC = () => {
    globalStyle();

    return (
        <ContentWrapper>
            <Head>
                <title>About - Cloudwave3</title>
            </Head>
            <SmoothScroll />
            <NavigationComponent />
            <AboutComponent />
            <FooterComponent />
        </ContentWrapper>
    );
}

export default AboutPage