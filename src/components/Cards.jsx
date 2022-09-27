import Card from "./Card"
import cake from "../assets/images/cake2.png"
import donuts from "../assets/images/donuts.png"
import cake3 from "../assets/images/weedingCake.png"
import cake2 from "../assets/images/birthday-cake.png"
import cupcake from "../assets/images/cupcake.png"
import bread from "../assets/images/bread.png"

function Cards(){
    <div className="right-container">
       
        <div className="row">
            <div className="column">
                 <Card title={"todos los pasteles"} image={cake}/>
            </div>
            <div className="column">
                <Card title={"Pasteles de boda"} image={cake3} />
            </div>

        </div>
   
    
    <Card title={"Pasteles de cumpleaños"} image={cake2} />
    <Card title={"Cupcakes"} image={cupcake} />
    <Card title={"Pan"}  image={bread}/>
    <Card title={"Donas"} image={donuts}/>
   </div>
}

export default Cards;