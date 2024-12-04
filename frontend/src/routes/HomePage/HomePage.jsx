import { Button } from "@material-tailwind/react";
import Units from "../../components/Units/Units";
import FeedbackCarousel from "../../components/FeedbackCarousel/FeedbackCarousel";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const HomePage = () => {
  const navigate = useNavigate();

  // Initialize AOS for animations
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Smooth easing effect
      offset: 200, // Trigger animation when 200px into view
      once: false, // Animation repeats when scrolling back
    });
  }, []);

  const redirect = () => {
    navigate("/onboarding");
  };

  return (
    <div className="homePage bg-gradient-to-b from-grey to-white-900 text-black min-h-screen overflow-hidden">
      {/* Welcome Section */}
      <div
        className="flex items-center justify-center min-h-screen flex-col text-center space-y-8 bg-cover bg-center"
        style={{ backgroundImage: "url('/')" }}
      >
        <div data-aos="fade-up" className="max-w-3xl mx-auto px-6">
          <h2 className="text-[2.5rem] font-bold text-black leading-tight">
            Welcome to{" "}
            <span className="block text-black-200">
              Maxhelp Business Enterprises
            </span>
          </h2>
          <h4 className="text-[1.5rem] text-black-300 font-medium mt-2">
            Empowering Your Journey
          </h4>
          <p className="text-black-400 text-sm md:text-base mt-4">
          At Maxhelp, we prioritize your success by delivering cutting-edge services tailored to your unique needs.
          </p>
          <div className="mt-6">
            <Button
              variant="gradient"
              color="white"
              className="px-8 py-3 text-black font-semibold shadow-md hover:shadow-lg transition-all"
              onClick={redirect}
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>

      {/* Business Units Section */}
      <div className="bottom py-16" data-aos="fade-up">
        <div className="my-[4rem] text-center uppercase">
          <h4
            className="text-xl text-black font-semibold mb-4"
            data-aos="fade-right"
          >
            View our new Business Units
          </h4>
          <Units />
        </div>

        {/* Feedback Section */}
        <div className="top my-[4rem]" data-aos="fade-up">
          <div className="text-center uppercase">
            <h4
              className="text-xl text-black font-semibold mb-4"
              data-aos="fade-left"
            >
              Feedback and Testimonials
            </h4>
            <FeedbackCarousel />
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomePage;
