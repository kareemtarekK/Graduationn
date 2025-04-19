import { IoClose, IoMenuOutline } from "react-icons/io5";
import headerCss from "./header.module.css";
import { useState } from "react";
import logoImg from '../../assets/Images/logo.png';


export default function Header() {

  const [isOpen,setIsOpen] = useState(false);

  const toggleMenu = ()=> {
    setIsOpen(!isOpen);
  };

  return (

    <header className={headerCss.header}>

      <nav className={headerCss.navbar}>

        <a href="#" className={headerCss.logo}>
          <img src={logoImg} alt={'logoImg'} />
        </a>

        <ul 
          id={headerCss.links}
          className={`${headerCss.links} ${isOpen ? headerCss.active : ''}`} 
        >

          <li>
            <a className={headerCss.active_li} href="#">Home</a>
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

        <div className={`${headerCss.account} ${isOpen ? headerCss.active_auth : ''}`}>

          <a href="#" className={headerCss.login}>Login</a>
          <a href="#" className={headerCss.register}>Register</a>

        </div>

        <div className={headerCss.burger_cont}>
          {isOpen ? 
            <IoClose className={headerCss.menu_btn} onClick={toggleMenu} /> : 
            <IoMenuOutline className={headerCss.menu_btn} onClick={toggleMenu} />
          }
        </div>

      </nav>

    </header>

  );

}
