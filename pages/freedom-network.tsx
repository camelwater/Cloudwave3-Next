import React from 'react';
import Head from 'next/head';
import { ContentWrapper } from '@css/stitches.config';
import globalStyle from '@css/global.style';
import 'animate.css/animate.min.css';
import SmoothScroll from '@components/Scroll';
import NavigationComponent from '@components/Nav/Navigation';
import FooterComponent from '@components/Footer/Footer';
import { getMdContent } from '@lib/readMd';
import NetworkComponent from '@components/FreedomPage/Network';


const FreedomNetworkPage: React.FC<{ mdContent: string }> = ({ mdContent }) => {
    // globalStyle();

    return (
        <ContentWrapper>
            <Head>
                <title>Freedom Network | Cloudwave3</title>
            </Head>
            <SmoothScroll />
            <NavigationComponent />
            <NetworkComponent mdContent={mdContent}/>
            <FooterComponent />
        </ContentWrapper>

    );
}

export async function getStaticProps () {
    return { 
        props: {
            mdContent: getMdContent('FreedomContent')
        }
    };
}

export default FreedomNetworkPage