import React from "react";
import { connect } from "react-redux";
import CoinList from "../components/CoinList";
import { getCoin } from "../modules/coins";
import Header from "../components/Header";

const HeaderContainer = ({ loading }) => {
    return (
        <div>
            <Header loading={loading}></Header>
        </div>
    );
};

export default connect((state) => ({ loading: state.coins.loading }))(
    HeaderContainer,
);
