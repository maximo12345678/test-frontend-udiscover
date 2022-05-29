import Header from "../components/Header";
import Services from "../components/Services";
import Footer from '../components/Footer';
import CardsBlog from '../components/CardsBlog';
import AboutUs from "../components/AboutUs";
import BannerDemoDay from '../components/BannerDemoDay';
import CardsPlans from '../components/CardsPlans';

const Home = () =>{
    return (
        <div className="home">
            <Header></Header>

            <Services></Services>
        
            <AboutUs></AboutUs>

            <CardsBlog></CardsBlog>
            
            <BannerDemoDay></BannerDemoDay>

            <CardsPlans></CardsPlans>

            <Footer></Footer>

        </div>
    )
}


export default Home;