import "../assets/styles/Sell.css"
function Sell({name, price,image}) {
    return (
        <div className="sell">
        <img className="img" src={image} />
        <div className="card-body">
            <span className="name">{name}  
            
            </span>
            <span className="price">Precio: 
               {price}</span>
        </div>
    </div> 
    )
}

export default Sell;