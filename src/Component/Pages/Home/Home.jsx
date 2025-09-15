import BestSeller from "../../BestSeller/BestSeller";
import LatestNews from "../../LatestNews/LatestNews";
import Banner from "./HomePage/Banner/Banner";
import CardSection from "./HomePage/CardSection/CardSection";
import Contact from "./HomePage/Contact/Contact";
import FeatureProduct from "./HomePage/FeatureProduct/FeatureProduct";
import Review from "./HomePage/Review/Review";
import ServiceHighlights from "./HomePage/ServiceHighlights/ServiceHighlights";
import Testimonial from "./HomePage/Testimonial/Testimonial";
import TopCategories from "./HomePage/TopCategories/TopCategories";
import Trusted from "./HomePage/Trusted/Trusted";

const Home = () => {
  return (
    <div>
      <Banner />
    
        <ServiceHighlights />
        <FeatureProduct />
        <TopCategories />
        <Trusted />
     
      <Review />
      <div className="container mx-auto">
        <CardSection />
        <BestSeller />
      </div>
      <LatestNews />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;
