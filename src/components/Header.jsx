import logo from "../assets/logo.webp";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="logo" className="logo" />
      <h1>M6</h1>
    </header>
  );
};

export default Header;
