import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";

const navItems = ["Home", "About", "Service", "Work", "Blog", "Contact"];

const NavBar = () => {
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center gap-7">
            <img src="/img/logo.png" alt="logo" className="w-13" />
          </div>

          {/* Navigation Links */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => {
                const lowercasedItem = item.toLowerCase();

                // Define external links for Service and Blog
                const link =
                  item === "Service"
                    ? "https://www.scratchpad.co.in/services"
                    : item === "Blog"
                    ? "http://blog.scratchpad.co.in/"
                    : `#${lowercasedItem}`;

                return (
                  <a
                    key={index}
                    href={link}
                    target={item === "Service" || item === "Blog" ? "_blank" : "_self"} // Opens external links in a new tab
                    rel={item === "Service" || item === "Blog" ? "noopener noreferrer" : undefined} // Security for external links
                    className="nav-hover-btn"
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
