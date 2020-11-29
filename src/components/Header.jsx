import React from "react";
import styled from "styled-components";

const TitleContainer = styled.div`
    background-color: #111;
    color: white;
    height: 100px;
    font-size: 36px;
    text-align: center;
    font-weight: 600;
    line-height: 100px;
`;

const FetchingContainer = styled.div`
    background-color: tomato;
    color: white;
    height: 50px;
    font-size: 24px;
    text-align: center;
    line-height: 50px;
    font-weight: 400;
    transition: 0.8s;
`;

const ResolvedContainer = styled.div`
    background-color: green;
    color: white;
    height: 50px;
    font-size: 24px;
    text-align: center;
    line-height: 50px;
    font-weight: 400;
    transition: 0.8s;
`;

const PartitionContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 10px;
    background-color: #d8d8d8;
    color: #fff;
    .part-rank {
        flex-basis: 50px;
        text-align: center;
    }
    .part-name {
        flex: 3;
    }
    .part-price {
        flex: 2;
    }
`;

const Header = ({ loading }) => {
    return (
        <div>
            <TitleContainer>Coin Tracker V1.0</TitleContainer>
            {loading ? (
                <FetchingContainer>Fetching...</FetchingContainer>
            ) : (
                <ResolvedContainer>Done!</ResolvedContainer>
            )}
            <PartitionContainer>
                <div className="part-rank">Rank</div>
                <div className="part-name">| Name</div>
                <div className="part-price">| Price(USD)</div>
            </PartitionContainer>
        </div>
    );
};

export default Header;
