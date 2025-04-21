import { useEffect } from "react";

export const NavBar = () => {
  useEffect(() => {
    const applyClass = () => {
      document.querySelectorAll("ul > li > a").forEach((e: Element) => {
        if (e.getAttribute("href") === window.location.pathname) {
          e.classList.add("active");
        }
      });
    };

    applyClass();
  }, []);
  return null;
};
