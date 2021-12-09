import Head from 'next/head';
import { ContentWrapper } from '@css/stitches.config';
import globalStyle from '@css/global.style';
import 'animate.css/animate.min.css';
import HomeComponent from '@components/HomePage/Home/Home';
import DescriptionComponent from '@components/HomePage/Description/Description';
import ToolsComponent from '@components/HomePage/Tools/Tools';
import NavigationComponent from '@components/NavBar/Navigation';
import FooterComponent from '@components/Footer/Footer';
import SmoothScroll from '@components/Scroll';
import * as Content from '@content/HomeContent';
import AboutComponent from '@components/AboutPage/About/AboutComponent';


const HomePage: React.FC = () => {
  globalStyle();

  return (
    <ContentWrapper>
      <Head>
        <title>{Content.HomeTitle}</title>
      </Head>
      <SmoothScroll />
      <NavigationComponent />
      <HomeComponent />
      <DescriptionComponent />
      <ToolsComponent />
      <FooterComponent />
    </ContentWrapper>
  );
}

export default HomePage