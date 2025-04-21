import { IoClose, IoMenuOutline } from "react-icons/io5";
import headerCss from "./header.module.css";
import { useEffect, useState } from "react";
import logoImg from '../../assets/Images/logo.png';


export default function Header() {

  const [isOpen,setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);

  const toggleMenu = ()=> {
    setIsOpen(!isOpen);
  };

  useEffect(() => {

    const handleOnScroll = () => {

      const scrollY = window.scrollY;

      if(scrollY > 0){setIsScroll(true)}
      else{setIsScroll(false)}

    }

    window.addEventListener('scroll' , handleOnScroll);

    return () => {
      window.removeEventListener('scroll' , handleOnScroll);
    }

  }, []);

  return (

    <header className={`${headerCss.header} ${isScroll ? headerCss.header_scroll : ''}`}>

      <nav className={`${headerCss.navbar} ${isScroll ? headerCss.navbar_scroll : ''}`}>

        <a href="#" className={headerCss.logo}>
          <img src={logoImg} alt={'logoImg'} />
        </a>

        <ul 
          id={headerCss.links}
          className={`
            ${headerCss.links} 
            ${isScroll ? headerCss.links_scroll : ''}
            ${isOpen && isScroll ? headerCss.active_scroll : ''} 
            ${isOpen && !isScroll ? headerCss.active : ''}
          `} 
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

        <div className={`${headerCss.account} ${isScroll ? headerCss.account_scroll : ''} ${isOpen ? headerCss.active_auth : ''}`}>

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
