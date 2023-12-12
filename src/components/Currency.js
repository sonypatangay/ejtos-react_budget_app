import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';
import '../App.css';
const Currency = ( ) => {
   
    const { dispatch, currency } = useContext(AppContext);
    const handleCurrencyChange = (currency) => {

        console.log(currency);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currency,
        });
       
    };
    return (
<div className='alert alert-secondary'>

<label htmlFor="currency" class="currency" style={{background: light-green}}>Currency </label>
  <select name="currency" id="currency" style={{background: light-green}} class="currency-content" value={currency} onChange={event=> handleCurrencyChange(event.target.value)}>
    <option value="$"> Dollar</option>
    <option value="£"> Pound</option>
    <option value="€"> Euro</option>
    <option value="₹"> Ruppe</option>
  </select>
  </div>
    );
};

export default Currency;
