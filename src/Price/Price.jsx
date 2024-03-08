import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Price({}) {
  const [price, setPrice] = useState("");
  const { currencyName } = useParams(); // currencyAbbr comes from the Route
  console.log(currencyName);

  useEffect(() => {
    const coinDeskUrl = `https://api.coindesk.com/v1/bpi/currentprice/${currencyName}`;

    async function getPrice() {
      try {
        const response = await fetch(coinDeskUrl);
        const data = await response.json();

        console.log(data);
        setPrice(data.bpi[currencyName].rate);
      } catch (err) {
        console.log(err);
      }
    }

    getPrice();
  }, [currencyName]);

  console.log(price, " <- price");
  return (
    <>
      <h1> The Bitcoin price in {currencyName}</h1>
      <h3>Price: {price}</h3>
    </>
  );
}