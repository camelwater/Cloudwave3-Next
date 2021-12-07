import Head from 'next/head';
// import Link from 'next/link';
import { ContentWrapper } from '@css/stitches.config';
import HomeComponent from '@components/Home/Home';
import globalStyle from '@css/global.style';
import 'animate.css/animate.min.css';
import DescriptionComponenet from '@components/Description/Description';
import SmoothScroll from '@components/Scroll';

const siteTitle = "Ryan Zhao";

const HomePage = () => {
  globalStyle();

  return (
    <ContentWrapper>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <SmoothScroll />
      <HomeComponent />
      <DescriptionComponenet />
    </ContentWrapper>
  );
}

export default HomePage