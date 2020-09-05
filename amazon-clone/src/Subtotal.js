import React from 'react';
import './Subtotal.css';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import CurrencyFormat from "react-currency-format";

function Subtotal() {
    // eslint-disable-next-line
    const [{ basket }, dispatch] = useStateValue();
    return <div className="subtotal" >
          {/**Price */} 
      
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  Subtotal ({basket.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal_gift">
                    <input type="checkbox" /> This Order Contains a gift
                </small>
              </>  
            )}
              decimalScale={2}
              value={getBasketTotal(basket)}
              displayType={'text'}
              thousandSeparator={true}
              prefix={'£'}
            /> 
           <button>Proceed to Checkout</button>
        </div>
}

export default Subtotal
