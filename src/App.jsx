import React from "react";
import CoinList from "./components/CoinList";
import CoinListContainer from "./containers/CoinListContainer";
import HeaderContainer from "./containers/HeaderContainer";

const App = () => {
    return (
        <div className="App">
            <HeaderContainer></HeaderContainer>
            <CoinListContainer></CoinListContainer>
        </div>
    );
};

export default App;
