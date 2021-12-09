import React from 'react';
import Head from 'next/head';
import { ContentWrapper } from '@css/stitches.config';
import globalStyle from '@css/global.style';
import 'animate.css/animate.min.css';
import SmoothScroll from '@components/Scroll';
import NavigationComponent from '@components/NavBar/Navigation';
import FooterComponent from '@components/Footer/Footer';
import HomeComponent from '@components/HomePage/Home/Home';


const SolutionsPage: React.FC = () => {
    globalStyle();

    return (
        <ContentWrapper>
            <Head>
                <title>Solutions - Cloudwave3</title>
            </Head>
            <SmoothScroll />
            <NavigationComponent />
            <HomeComponent />
            <FooterComponent />
        </ContentWrapper>

    );
}

export default SolutionsPage