export default function NavItem({ text, active }) {
  return (
    <>
      <a className={active ? "nav-item-active" : "nav-item"}>{text}</a>
    </>
  );
}
