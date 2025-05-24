import { IoClose, IoMenuOutline } from "react-icons/io5";
import headerCss from "./header.module.css";
import { useEffect, useState } from "react";
import logoImg from '../../assets/Images/logo.png';
import { Link, NavLink } from "react-router-dom";


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

    handleOnScroll()

    window.addEventListener('scroll' , handleOnScroll);

    return () => {
      window.removeEventListener('scroll' , handleOnScroll);
    }

  }, []);

  return (

    <header className={`${headerCss.header} ${isScroll ? headerCss.header_scroll : ''}`}>

      <nav className={`${headerCss.navbar} ${isScroll ? headerCss.navbar_scroll : ''}`}>

        <Link to={'/'} className={headerCss.logo}>
          <img src={logoImg} alt={'logoImg'} />
        </Link>

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
            <NavLink to={'/'}>Home</NavLink>
          </li>

          <li>
            <NavLink to={'/checkPlate'}>Check Plate</NavLink>
          </li>

          <li>
            <NavLink to={'/reporttheft'}>Report Theft</NavLink>
          </li>

          <li>
            <NavLink to={'/trackreport'}>Track Report</NavLink>
          </li>

          <li>
            <NavLink to={'/appeaks'}>Appeaks</NavLink>
          </li>

        </ul>

        <div className={`${headerCss.account} ${isScroll ? headerCss.account_scroll : ''} ${isOpen ? headerCss.active_auth : ''}`}>

          <Link to={'/login'} className={headerCss.login}>Login</Link>
          <Link to={'/register'} className={headerCss.register}>Register</Link>

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
