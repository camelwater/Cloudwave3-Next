import Head from 'next/head';
// import Link from 'next/link';
import { ContentWrapper } from '@css/stitches.config';
import globalStyle from '@css/global.style';
import 'animate.css/animate.min.css';
import HomeComponent from '@components/Home/Home';
import DescriptionComponent from '@components/Description/Description';
import ToolsComponent from '@components/Tools/Tools';
import NavigationMenu from '@components/NavBar/NavBar';
import FooterComponent from '@components/Footer/Footer';

import SmoothScroll from '@components/Scroll';

const siteTitle = "Cloudwave3";

const HomePage = () => {
  globalStyle();

  return (
    <ContentWrapper>
      <NavigationMenu />
      <Head>
        <title>{siteTitle}</title>
        <desc>Cloudwave3</desc>
      </Head>
      <SmoothScroll />
      <HomeComponent />
      <DescriptionComponent />
      <ToolsComponent />
      <FooterComponent />
    </ContentWrapper>
  );
}

export default HomePage