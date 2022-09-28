
import "../assets/styles/Main.css"
function Main(){
    return(
        <>
        <div className="showcase-area">
        <div className="container">
          <div className="left">
            <div className="title">
              <h1>Disfruta de nuestro sabor tradicional</h1>
            </div>
            <p className="text">
              Tenemos para ti una gran variedad de pasteles, postres y panadería. 
            </p>
            <div className="cta">
              <a href="" className="btn">Haz tu pedido</a>
            </div>
          </div>
            <div className="right">
            <img src={'/images/cake2.png'} className="cake"/>
          </div>
           </div>  
           </div>
           </>
    )
}

export default Main;