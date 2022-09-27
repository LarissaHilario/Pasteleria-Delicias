import logoFacebook from '../assets/images/facebook.svg'
import logoInstagram from '../assets/images/instagram.svg'
import logoWhatsapp from "../assets/images/whatsapp.svg";
import "../assets/styles/Footer.css"
function Footer() {
    return (
        <footer>
            <div className='footer_img'>
                <img src={logoFacebook} alt="Logo Facebook" />
                <img src={logoInstagram} alt="Logo Instagram" />
                <img src={logoWhatsapp} alt="Logo Whatsapp" />
            </div>
        </footer>
      );
}

export default Footer;