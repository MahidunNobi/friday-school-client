import Faq from "../../componants/Faq/Faq";
import Features from "../../componants/Features/Features";
import Hero from "../../componants/Hero/Hero";

const Home = () => {
  return (
    <div className="container mx-auto px-6 my-6">
      <Hero />
      <Features />
      <Faq />
    </div>
  );
};

export default Home;
