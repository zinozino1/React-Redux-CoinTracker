import React from "react";
import { connect } from "react-redux";
import CoinList from "../components/CoinList";
import { getCoin } from "../modules/coins";

const CoinListContainer = ({ loading, data, getCoin }) => {
    return (
        <>
            <CoinList
                loading={loading}
                data={data}
                getCoin={getCoin}
            ></CoinList>
        </>
    );
};

export default connect(
    (state) => ({ loading: state.coins.loading, data: state.coins.data }),
    { getCoin },
)(CoinListContainer);
