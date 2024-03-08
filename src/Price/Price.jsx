import React, { useEffect, useState } from 'react';
import './Price.css';
import {Link} from 'react-router-dom'


const coindeskURL = 'https://api.coindesk.com/v1/bpi/currentprice/';

const Price = props => {
  const [price, setPrice] = useState('')
  console.log('Price - props', props);

  useEffect(() => {
    const currency = props.match.params.currency;
    const url = `${coindeskURL}${currency}.json`;
    const makeApiCall = async () => {
      const res = await fetch(url);
      const json = await res.json();
      console.log('Price - json', json.bpi[currency].rate);
      setPrice(json.bpi[currency].rate)
    };
    makeApiCall();
  }, []);
  
  // [] means is runs only on mount
  // no [] means it will rerun if updated
  // [price] means it will rerun if that value has changed
   const handleClick = () => {
     // bunch of logic
    props.history.push('/currencies')
   }

  return (
    <>
      <div>
        <h1>Bitcoin price in {props.match.params.currency}</h1>
        <div className="price">Price: {price}</div>
        <Link to="/currencies">Back To Currencies</Link><br/>
        <button onClick={handleClick}> Home</button>
      </div>
    </>
  );
};

export default Price;
