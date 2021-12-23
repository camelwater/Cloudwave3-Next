import React from 'react';
import Head from 'next/head';
import { ContentWrapper } from '@css/stitches.config';
import globalStyle from '@css/global.style';
import 'animate.css/animate.min.css';
import SmoothScroll from '@components/Scroll';
import NavigationComponent from '@components/Nav/Navigation';
import FooterComponent from '@components/Footer/Footer';
import SolutionComponent from '@components/SolutionsPage/SolutionsComponent';
import { getBlockContent } from '@lib/readMd';


const SolutionsPage: React.FC<{ contentData }> = ({ contentData }) => {

    return (
        <ContentWrapper>
            <Head>
                <title>Solutions | Cloudwave3</title>
            </Head>
            <SmoothScroll />
            <NavigationComponent />
            <SolutionComponent contentData={contentData}/>
            <FooterComponent />
        </ContentWrapper>

    );
}

export async function getStaticProps () {
    const contentData = getBlockContent('Solutions');
    return {
        props: {
            contentData
        },
    };
}

export default SolutionsPage