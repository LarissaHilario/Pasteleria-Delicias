import Sell from "./Sell";
import "../assets/styles/Sells.css"

function Sells() {
 
    const cakes = [
      {
        id:1,
        name: "Fiesta de chocolate",
        price: "$300",
        image:'/images/chocolateCake1.png'
      },
      {
        id:2,
        name: "Unicornio",
        price: "$320",
        image:'/images/birthday-cake.png'
      },
      {
        id:3,
        name: "Dulce Tentación",
        price: "$45",
        image:'/images/cookie1.png'
      },
      {
        id:4,
        name: "Fresas frescas",
        price: "$240",
        image:'/images/cheescake1.png'
      },
      
    ];
  
    return (
        <>
            <br>
            </br>
            <br></br>
            <h2 className="subtitle">Los más vendidos</h2> 
            <div className="containerSells">
            {cakes.map((cake)=> {
                return (
                    <Sell
                      key={cake.id}
                      name={cake.name}
                      price={cake.price}
                      image={cake.image}
                    />
                   
                )
               
            })}  
            </div>
        </>
    );
  }
  

  export default Sells;
