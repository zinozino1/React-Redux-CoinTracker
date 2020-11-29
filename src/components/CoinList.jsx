import React, { useEffect } from "react";
import Coin from "../components/Coin";

const CoinList = ({ loading, data, getCoin }) => {
    useEffect(() => {
        getCoin();
        setTimeout(() => {
            setInterval(() => {
                getCoin();
            }, 20000);
        }, 5000);
    }, []);

    return (
        <div>
            {data &&
                data.map((v, i) => (
                    <Coin
                        key={v.id}
                        price={v.quotes.USD.price}
                        name={v.name}
                        rank={v.rank}
                    ></Coin>
                ))}
        </div>
    );
};

export default CoinList;
