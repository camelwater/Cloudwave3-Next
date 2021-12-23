import Head from 'next/head';
import { ContentWrapper } from '@css/stitches.config';
import globalStyle from '@css/global.style';
import 'animate.css/animate.min.css';
import HomeComponent from '@components/HomePage/Home/Home';
import DescriptionComponent from '@components/HomePage/Description/Description';
import ToolsComponent from '@components/HomePage/Tools/Tools';
import NavigationComponent from '@components/Nav/Navigation';
import FooterComponent from '@components/Footer/Footer';
import SmoothScroll from '@components/Scroll';

const HomePage: React.FC = () => {

  return (
    <ContentWrapper>
      <Head>
        <title>Cloudwave3</title>
      </Head>
      <SmoothScroll />
      <NavigationComponent isHome/>
      <HomeComponent />
      <DescriptionComponent />
      <ToolsComponent />
      <FooterComponent />
    </ContentWrapper>
  );
}

export default HomePage