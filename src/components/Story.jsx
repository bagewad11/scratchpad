import gsap from "gsap";
import { useRef } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
  const createMouseHandlers = (ref) => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const element = ref.current;

      if (!element) return;

      const rect = element.getBoundingClientRect();
      const xPos = clientX - rect.left;
      const yPos = clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((yPos - centerY) / centerY) * -10;
      const rotateY = ((xPos - centerX) / centerX) * 10;

      gsap.to(element, {
        duration: 0.3,
        rotateX,
        rotateY,
        transformPerspective: 500,
        ease: "power1.inOut",
      });
    };

    const handleMouseLeave = () => {
      const element = ref.current;

      if (element) {
        gsap.to(element, {
          duration: 0.3,
          rotateX: 0,
          rotateY: 0,
          ease: "power1.inOut",
        });
      }
    };

    return { handleMouseMove, handleMouseLeave };
  };

  const renderSection = (id, title, description, imgSrc, url) => {
    const frameRef = useRef(null);
    const { handleMouseMove, handleMouseLeave } = createMouseHandlers(frameRef);

    return (
      <div id={id} className="min-h-dvh w-screen bg-black text-blue-50">
        <div className="flex size-full flex-col items-center py-10 pb-24">
          <div className="relative size-full">
            <AnimatedTitle
              title={title}
              containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
            />

            <div className="story-img-container">
              <div className="story-img-mask">
                <div className="story-img-content">
                  <img
                    ref={frameRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseLeave}
                    onMouseEnter={handleMouseLeave}
                    src={imgSrc}
                    alt="floating-image"
                    className="object-contain"
                  />
                </div>
              </div>

              <svg
                className="invisible absolute size-0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <filter id="flt_tag">
                    <feGaussianBlur
                      in="SourceGraphic"
                      stdDeviation="8"
                      result="blur"
                    />
                    <feColorMatrix
                      in="blur"
                      mode="matrix"
                      values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                      result="flt_tag"
                    />
                    <feComposite
                      in="SourceGraphic"
                      in2="flt_tag"
                      operator="atop"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
            <div className="flex h-full w-fit flex-col items-center md:items-start">
              <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
                {description}
              </p>

              <a href={url} target="_blank" rel="noopener noreferrer">
                <Button
                  id={`${id}-btn`}
                  title="Case Study"
                  containerClass="mt-5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div id="custom-heading" className="w-screen bg-black text-blue-50 py-10">
        <div id="work" className="text-center">
          <AnimatedTitle
            title="Scratchpads Trusted client<b>s</b>"
            containerClass="pointer-events-none mix-blend-difference relative z-10 text-4xl font-bold"
          />
        </div>
      </div>

      {renderSection(
        "story",
        "AX<b>o</b>r<br />Helmet<b>s</b>",
        "AXOR Helmets, known for innovative designs, strength, and safety, offers stylish, functional options for motorcycle enthusiasts. Collaborating with Scratchpad, AXOR expands its digital presence through impactful brand stories and campaigns.",
        "/img/axor.jpg",
        "https://www.scratchpad.co.in/works/axor"
      )}

      {renderSection(
        "adventure",
        "Aiky<b>a</b><br /> Jewellery",
        "Aikya Jewels in Udupi offers exquisite gold and diamond designs blending tradition and modernity. Scratchpad boosts its digital reach with tailored marketing strategies.",
        "/img/aikya.jpg",
        "https://www.scratchpad.co.in/works/aikya"
      )}

      {renderSection(
        "galaxy",
        "Wigwa<b>m</b>",
        " Rising leader in plywood, offers high-quality products for residential and commercial needs. Scratchpad drives targeted campaigns to expand its reach and highlight its excellence.",
        "/img/wigwam.jpg",
        "https://www.scratchpad.co.in/works/wigwam"
      )}

      {renderSection(
        "ocean",
        "BS<b>C</b><br /> C<b>ha</b>nnabasappa & Sons",
        "A renowned Belgaum textile brand, offers premium fabrics blending tradition and modernity. Scratchpad boosts its online presence with tailored marketing strategies.",
        "/img/bsc.jpg",
        "https://www.scratchpad.co.in/works/bsc"
      )}

      {renderSection(
        "sky",
        "BIB<b>a</b>",
        "A beloved Indian brand for ethnic wear, expands its digital reach with Scratchpad’s creative marketing and engaging content strategies.",
        "/img/biba.jpg",
        "https://www.scratchpad.co.in/work"
      )}
    </>
  );
};

export default FloatingImage;
