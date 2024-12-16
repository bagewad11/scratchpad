import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef } from "react";
import heroBanner from "../assets/hero-banner.png";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      rotation: 360,
      duration: 10,
      ease: "linear",
      repeat: -1,
    });

    gsap.fromTo(
      imageRef.current,
      { opacity: 1 },
      {
        opacity: 0,
        scrollTrigger: {
          trigger: ".relative",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  const handleKnowMoreClick = () => {
    console.log("Know More button clicked!"); // Debug
    window.open("https://www.instagram.com/scratchpad.inc/", "_blank");
  };

  return (
    <div id="home" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-black">
      <div
        ref={imageRef}
        className="absolute top-1/2 left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBanner})`,
        }}
      ></div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
        SCRATCH <b>THE </b>ORDINARY
      </h1>

      <div className="absolute left-0 top-0 z-40 size-full">
        <div className="mt-24 px-5 sm:px-10">
          <h1 className="special-font hero-heading text-blue-100">
            WE DO DOPE SH!T FROM SCRAT<b>c</b>h
          </h1>

          <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
            We work with you as growth partners to elevate your brand’s
            potential with advertising, branding, 
            <br /> content and tech.
          </p>

          <button
            id="watch-trailer"
            className="bg-yellow-300 flex-center gap-1 px-4 py-2 rounded"
            onClick={handleKnowMoreClick}
          >
            <TiLocationArrow />
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
