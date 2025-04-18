import { IoMenuOutline } from "react-icons/io5";
import headerCss from "./header.module.css";
import { useState } from "react";
export default function Header() {
    const [isOpen,setIsOpen] = useState(false);

    const toggleMenu = ()=> {
      setIsOpen(!isOpen);
    };


  return (
    <header>
      <nav className={headerCss.navbar}>
        <a href="#" className={headerCss.logo}>
          Licence Plat Ai Tracker
        </a>
        <ul 
     id={headerCss.links}
        className={`${headerCss.links} ${isOpen ? headerCss.active : ''}`} >
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Check Plate</a>
          </li>
          <li>
            <a href="#">Report Theft</a>
          </li>
          <li>
            <a href="#">Track Report</a>
          </li>
          <li>
            <a href="#">Appeaks</a>
          </li>
        </ul>

        <div className={headerCss.account}>
          <a href="#" className={headerCss.login}>Login</a>
          <a href="#" className={headerCss.rege}>Regeister</a>
          </div>
          
       <div >
        <IoMenuOutline className={headerCss.menubtn} onClick={toggleMenu}  />
        </div>
      </nav>
    </header>
  );
}
