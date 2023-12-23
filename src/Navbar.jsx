import { useEffect, useState } from "react";
import NavItem from "./NavItem";
import logo from "./assets/img/suitmedia-white.svg";

export default function Navbar() {
  const item = ["Work", "About", "Services", "Ideas", "Careers"];

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <nav className="flex bg-myOrange-600 px-20 justify-between items-center p-2 fixed w-full z-20" style={{ top: visible ? "0" : "-100px", transition: "top 0.3s" }}>
        <img src={logo} alt="suitmedia logo" width={120} className="p-3" />
        <div className="flex items-center gap-3">
          {item.map((it) => (
            <NavItem text={it} key={it} />
          ))}
        </div>
      </nav>
    </>
  );
}
