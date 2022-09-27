import "../assets/styles/Card.css"
function Card({title,image}) {
    return (
        <div className="card">
            <img className="image" src={image} />
            <div className="card-top">
                <h2>{title}</h2>
            </div>
        </div> 
    )
    }
    export default Card;