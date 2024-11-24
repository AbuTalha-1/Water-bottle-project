import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'

const Bottles = () => {
  const[bottles,setBottle]= useState([]);
  const [cart, setCart] = useState([]);

 useEffect(() =>{
    fetch('bottles.json')
    .then( res => res.json())
    .then( data => setBottle(data))
 },[]);

 const handleaddtocart = Bottle =>{
    const newcart = [...cart, Bottle];
    setCart (newcart);
 }


    return (
        <div>
           
           <h2>
                Bottles Available: {bottles.length}
            </h2>

            <h3> Add to cart: {cart.length} </h3>
            <div className="Bottles-container">
            {
                    bottles.map( bottle => <Bottle key={bottle.id}
                    handleaddtocart ={() => handleaddtocart(Bottle)}
                    bottle ={bottle}
                    ></Bottle> )
                }

            </div>
           
        </div>
    );
};

export default Bottles;