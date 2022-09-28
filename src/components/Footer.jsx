
import "../assets/styles/Footer.css"
function Footer() {
    return (
        <footer>
            <div className='footer_img'>
                <img src={'/images/facebook.svg'} alt="Logo Facebook" className='logoFacebook'/>
                <img src={'/images/instagram.svg'} alt="Logo Instagram"  />
                <img src={'/images/whatsapp.svg'} alt="Logo Whatsapp" />
            </div>
        </footer>
      );
}

export default Footer;