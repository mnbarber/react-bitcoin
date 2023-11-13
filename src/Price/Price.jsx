import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Price({setCurrencyAbbr}) {
  const [price, setPrice] = useState("");
  const { name } = useParams(); // currencyAbbr comes from the Route
  console.log(name);

  useEffect(() => {
	setCurrencyAbbr(name)
    const coinDeskUrl = `https://api.coindesk.com/v1/bpi/currentprice/${name}`;

    async function getPrice() {
      try {
        const response = await fetch(coinDeskUrl);
        const data = await response.json();

        console.log(data);
        setPrice(data.bpi[name].rate);
      } catch (err) {
        console.log(err);
      }
    }

    getPrice();
  }, [name]);

  console.log(price, " <- price");
  return (
    <>
      <h1> The Bitcoin price in {name}</h1>
      <h3>Price: {price}</h3>
    </>
  );
}
