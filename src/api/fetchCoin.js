import axios from "axios";

const API_URL = "https://api.bithumb.com/public/ticker";
const API_URL2 = "https://api.coinpaprika.com/v1/tickers";
const API_URL3 = `https://jsonplaceholder.typicode.com/users`;

const fetchCoin = () => axios.get(API_URL2);

export default fetchCoin;
