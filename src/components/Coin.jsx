import React from "react";
import styled, { css } from "styled-components";

const CoinWrapper = styled.div`
    border: 1px solid black;
    margin: 10px 0;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    border-radius: 7px;
    background-color: #faf8fc;

    .name,
    .rank,
    .price {
        text-align: left;
    }
    .rank {
        flex-basis: 50px;
        text-align: center;
    }
    .name {
        flex: 3;
    }

    .price {
        flex: 2;
    }

    ${(props) =>
        props.rank === 3 &&
        css`
            background-color: #cd7f32;
        `}
    ${(props) =>
        props.rank === 2 &&
        css`
            background-color: #c0c0c0;
        `}
    ${(props) =>
        props.rank === 1 &&
        css`
            background-color: #ffd700;
        `}
`;

const Coin = ({ price, name, rank }) => {
    return (
        <CoinWrapper rank={rank}>
            <div className="rank">{rank}</div>
            <div className="name">| {name}</div>
            <div className="price">| {price}</div>
        </CoinWrapper>
    );
};

export default Coin;
