import React, { forwardRef } from 'react';
import { useStateValue } from './StateProvider';
import './CheckoutProduct.css';


const CheckoutProduct = forwardRef(({ id, title, image, price, rating}, ref) => {
    // eslint-disable-next-line
    const [{ basket }, dispatch] = useStateValue();

   const removeFromBasket = () => {
       //remove from basket
       dispatch({
           type: "REMOVE_FROM_BASKET",
           id: id,
       });
   };


    return (
        <div ref={ref} className="checkoutProduct">
           <img className="checkoutProduct__image" src={image} alt="" /> 

           <div className="checkoutProduct__info">
               <p className="checkoutProduct__title">{title}</p>
               <p className="checkoutProduct__price">
                  <small>£</small>
                  <strong>{price}</strong>
               </p>

               <div className="checkoutProduct__rating">
                  {Array(rating)
                  .fill()
                  .map((_, i) => (
                     // eslint-disable-next-line 
                    <p>⭐</p> 
                ))
                }
              </div>
              <button onClick={removeFromBasket}>Remove from basket</button> 
           </div>
        </div>
    
    );
});
export default CheckoutProduct;