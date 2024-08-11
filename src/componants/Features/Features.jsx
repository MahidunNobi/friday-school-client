import InteractiveImg from "../../assets/Interactive.jpg";
import performance from "../../assets/Performance.jpg";
import Personalize from "../../assets/Personalize.jpg";
import colaboration from "../../assets/colaboration.jpg";
import Feature from "../Feature/Feature";

const Features = () => {
  return (
    <div className="my-6">
      <h1 className="text-3xl md:text-5xl font-medium font-teachers text-center">
        Discover Our Key Features
      </h1>
      <p className="max-w-[680px] mx-auto text-center my-6 dark:text-gray-500 text-gray-700">
        Explore the core pillars of our platform through our feature section.
        Discover how Friday School empowers learners and educators alike with
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        <Feature
          img={InteractiveImg}
          heading="Engaging Tasks"
          desc="Dive into a world of interactive assignments designed to captivate your attention and deepen your understanding."
        />
        <Feature
          img={Personalize}
          heading="Tailored Experience"
          desc="Experience education like never before with personalized learning pathways tailored to your unique needs and interests. "
        />
        <Feature
          img={colaboration}
          heading="Collaborative Environment"
          desc="Foster collaboration and teamwork in a seamless digital environment. Connect with peers, share ideas, and work together."
        />
        <Feature
          img={performance}
          heading="Progress Tracking"
          desc="Stay on top of your academic journey with detailed performance insights. Monitor your grades, track your achievements"
        />
      </div>
    </div>
  );
};

export default Features;
