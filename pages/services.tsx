import React from 'react';
import Head from 'next/head';
import { ContentWrapper } from '@css/stitches.config';
import 'animate.css/animate.min.css';
import SmoothScroll from '@components/Scroll';
import NavigationComponent from '@components/Nav/Navigation';
import FooterComponent from '@components/Footer/Footer';
import ServiceComponent from '@components/ServicesPage/ServicesComponent';
import { getBlockContent } from '@lib/readMd'

const ServicesPage: React.FC<{ contentData: [] }> = ({ contentData }) => {

    return (
        <ContentWrapper>
            <Head>
                <title>Services | Cloudwave3</title>
            </Head>
            <SmoothScroll />
            <NavigationComponent />
            <ServiceComponent contentData={contentData} />
            <FooterComponent />
        </ContentWrapper>

    );
}

export async function getStaticProps () {
    const contentData = getBlockContent('Services');
    return {
        props: {
            contentData,
        },
    };
}

export default ServicesPage