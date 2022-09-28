
import '../assets/styles/header.css'

function Header() {
  return (
    <header>
        <div className="container">
                <div className="logo">
                <a href=''><img src={"/images/logo.png"} alt='logo'/></a>
                <a href=''> <h3 >Pastelería Delicias</h3></a>
                </div>
                <div className="links">
                  <ul>
                    <li><a href=''>Nosotros</a></li>
                    <li><a href=''>Productos</a></li>
                    <li><a href=''>Contacto</a></li>
                  </ul>
                </div>
                <div className="overlay"></div>
    
                <div className="hamburger-menu">
                  <div className="bar"></div>
                </div>
              </div>
    </header>
  );
}
export default Header;