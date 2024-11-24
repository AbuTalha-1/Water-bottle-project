import './Bottle.css'
const Bottle = ({bottle, handleaddtocart}) => {
    // console.log(bottle);
    const {name, price, img, stock} = bottle;
    
    return (
        <div className="bottle">
            <h3>
                single Bottle Name: {name}
            </h3>
            <img src={img} alt="img of Bottle" />
            <p>
                Price: {price}
            </p>
            <p>
                Stock:{stock} 
            </p>
            <button onClick={handleaddtocart}>Purchase</button>
        </div>
    );
};

export default Bottle;