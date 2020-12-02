import React from "react";
import { connect } from "react-redux";
import CoinList from "../components/CoinList";
import { getCoins } from "../modules/coins";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

const CoinListContainer = ({ loading, data, getCoins }) => {
    return (
        <>
            <CoinList
                loading={loading}
                data={data}
                getCoin={getCoins}
            ></CoinList>
        </>
    );
};

export default connect(
    (state) => ({
        loading: state.coins.loading,
        data: state.coins.data,
    }),
    { getCoins },
)(CoinListContainer);
