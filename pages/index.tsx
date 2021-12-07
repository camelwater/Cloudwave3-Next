import Head from 'next/head';
// import Link from 'next/link';
import { ContentWrapper } from '@css/stitches.config';
import globalStyle from '@css/global.style';
import 'animate.css/animate.min.css';
import HomeComponent from '@components/Home/Home';
import DescriptionComponent from '@components/Description/Description';
import ToolsComponent from '@components/Tools/Tools';
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
      <DescriptionComponent />
      <ToolsComponent />
    </ContentWrapper>
  );
}

export default HomePage