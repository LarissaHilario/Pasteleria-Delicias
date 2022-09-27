
import Card from "../components/Card";
import cake from "../assets/images/cake3.png"
import donuts from "../assets/images/donuts.png"
import cake3 from "../assets/images/weedingCake1.png"
import cake2 from "../assets/images/birthday-cake.png"
import cupcake from "../assets/images/cupcake2.png"
import bread from "../assets/images/bread.png"
import "../assets/styles/products.css"
import Footer from "../components/Footer";
function Products() {
    return (
        
           <div>
            <h2 className="subtitle">Productos</h2>
            <p className="text1">Tenemos para ti una gran variedad de pasteles, postres y panadería, da click en la categoría de tu elección..</p>
            <div className="right-container">
                <Card title={"Todos los pasteles"} image={cake}/>
                <Card title={"Pasteles de boda"} image={cake3} />
                <Card title={"Pastel de cumpleaños"} image={cake2}></Card>
                <Card title={"Pastel de cumpleaños"} image={cupcake}></Card>
       </div>
       </div>
      );
}
export default Products