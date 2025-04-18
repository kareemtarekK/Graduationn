import headerCss from './header.module.css'
export default function Header() {
  return (
    <header id="header">
    <nav className={headerCss.navbar}>
        <a href="#" className="logo">Licence Plat Ai Tracker</a>
        <ul>
            <li><a href="#">Home</a></li>
               <li><a href="#">Check Plate</a></li> 
               <li><a href="#">Report Theft</a></li> 
               <li><a href="#">Track Report</a></li>
               <li><a href="#">Appeaks</a></li>
        </ul>

       <div className="account">
        <a href="#">Login</a>
        <a href="#">Regeister</a>
       </div>
    </nav>
</header>
  )
}
