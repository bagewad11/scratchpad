import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="" />
  </div>
);

const Button1 = ({ title, containerClass, link, ariaLabel }) => (
  <a
    href={link}
    className={`btn ${containerClass}`}
   
    rel="noopener noreferrer"  // Ensure `rel` is not added
    aria-label={ariaLabel}  // Accessible description
  >
    {title}
  </a>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          
          
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
         
          <ImageClipBox
            src="/img/scratch.png"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <AnimatedTitle
            title="Read&#39;y t<b>o</b> rewrite the <br /> rg<b>u</b>les? <br /> <b> Let’s create </b>magic!."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button1
            title="Contact Us"
            containerClass="mt-10 cursor-pointer"
            link="tel:+91 77954 77440"
            aria-label="Contact us via phone"
          />
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
