import NavItem from "./NavItem";
import logo from "./assets/img/suitmedia-white.svg";

export default function Navbar() {
  const item = ["Work", "About", "Services", "Ideas", "Careers"];
  return (
    <>
      <nav className="flex bg-myOrange-600 px-20 justify-between items-center p-2 fixed top-0 w-full z-20">
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
