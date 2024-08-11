import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import HeroImg from "../../assets/hero.svg";
const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row min-h-[90vh] gap-6 items-center">
      <div className="md:w-1/2">
        <h1 className=" text-4xl md:text-6xl font-semibold font-teachers">
          Elevate Learning, Spark Success.
        </h1>
        <p className="dark:text-gray-200 my-6">
          Welcome to Friday School, where learning knows no bounds. Our mission
          is to ignite curiosity, foster creativity, and inspire a lifelong love
          for learning. With a diverse range of assignments curated by
          passionate educators, we offer students the opportunity to explore,
          discover, and excel in their academic journey
        </p>
        <button className="btn btn-outline hover:text-white dark:border-secoundry dark:text-secoundry  border-primary text-primary hover:bg-primary hover:border-primary">
          Explore
          <EastOutlinedIcon />
        </button>
      </div>
      <div className="md:w-1/2">
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
