import Card from "./Card"
import "../assets/styles/cards.css";

function Cards() {
    return(
        <div>
        <h2 className="subtitle">Productos</h2>
        <p className="text1">Tenemos para ti una gran variedad de pasteles, postres y panadería, da click en la categoría de tu elección..</p>
    <div className="right-container">

        <Card title={"Todos los pasteles"} image={'/images/cake3.png/'}/>
        <Card title={"Pasteles de boda"} image={'/images/weedingCake1.png'} />
        <Card title={"Pasteles de cumpleaños"} image={'/images/birthday-cake.png'} />
        <Card title={"Cupcakes"} image={'/images/cupcake2.png'} />
        <Card title={"Pan"} image={'/images/bread1.png'} />
        <Card title={"Donas"} image={'/images/donuts2.png'} />
        <Card title={"Galletas"} image={'/images/cookies1.png'} />
        <Card title={"Tartas"} image={'/images/tarta2.png'}/>
</div>
    </div>
    )

}

export default Cards;