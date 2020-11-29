import fetchCoin from "../api/fetchCoin";
import { handleActions } from "redux-actions";

// action type

const GET_COIN_FENDING = "coin/GET_COIN_FENDING";
const GET_COIN_SUCCESS = "coin/GET_COIN_SUCCESS";
const GET_COIN_FAILURE = "coin/GET_COIN_FAILURE";

// thunk

export const getCoin = () => async (dispatch, setState) => {
    dispatch({ type: GET_COIN_FENDING, payload: true });
    try {
        const coins = await fetchCoin();

        const compare = (key) => (a, b) => a[key] - b[key];

        const sortedCoin = coins.data.sort(compare("rank"));
        dispatch({
            type: GET_COIN_SUCCESS,
            payload: {
                data: sortedCoin.filter((v, i) => {
                    return i < 20;
                }),
                loading: false,
            },
        });
    } catch (error) {
        dispatch({ type: GET_COIN_FAILURE, payload: false });
    }
};

// initial state

const initialState = {
    loading: false,
    data: null,
};

// reducer

const coins = handleActions(
    {
        [GET_COIN_FENDING]: (state, action) => ({
            ...state,
            loading: action.payload,
        }),
        [GET_COIN_SUCCESS]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [GET_COIN_FAILURE]: (state, action) => ({
            ...state,
            loading: action.payload,
        }),
    },
    initialState,
);

export default coins;
