import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";
import Logo from "../assets/logo.svg"

const Sidebar = ({ handleChange }) => {

  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <img src={Logo} alt="Logo" style={{ width: '90px', height: '50px', position: 'relative', top:'15px', left:"-40px" }}/>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;