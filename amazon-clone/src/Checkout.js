import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import "./Checkout.css";

function Checkout() {
    // eslint-disable-next-line
    const [{ basket }] = useStateValue();

    return (
      <div className="checkout">
        <div className="checkout_left" >
         <img className="checkout_ad" 
         src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ-yo_tfwUjXtCFcA1ScYbhYwT8p_EcyN746w&usqp=CAU"
         alt=""
         />
         {basket?.length === 0  ? (
             <div>
                 <h2>Your shopping basket is empty</h2>
                 <p>
                     You have no items in your basket. To buy one or more click on "Add to basket" next to the item
                 </p>
             </div>
         ) : (
             <div>
                 <h2 className="checkout_title">Your Shopping Basket</h2>

                 {/* */}
                 {basket?.map(item => (
                  <CheckoutProduct
                     id={item.id}
                     title={item.title}
                     image={item.image}
                     price={item.price}
                     rating={item.rating}
                   />  
                 ))}
             </div>   
          )}
          </div>
          {basket.length > 0 && (
              <div className="checkout_right">
                  <Subtotal />
              </div>
          )}
        </div>
     );  
}

export default Checkout
