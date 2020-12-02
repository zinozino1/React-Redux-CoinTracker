import fetchCoin from "../api/fetchCoin";
import { handleActions, createAction } from "redux-actions";
import { takeLatest, takeEvery, put, call } from "redux-saga/effects";

// action type

const GET_COIN_FENDING = "coin/GET_COIN_FENDING";
const GET_COIN_SUCCESS = "coin/GET_COIN_SUCCESS";
const GET_COIN_FAILURE = "coin/GET_COIN_FAILURE";
const GET_COIN_LOADING = "coin/GET_COIN_LOADING";

// action creator

export const getCoins = createAction(GET_COIN_FENDING);

// thunk

// export const getCoin = () => async (dispatch, setState) => {
//     dispatch({ type: GET_COIN_FENDING, payload: true });
//     try {
//         const coins = await fetchCoin();

//         const compare = (key) => (a, b) => a[key] - b[key];

//         const sortedCoin = coins.data.sort(compare("rank"));
//         dispatch({
//             type: GET_COIN_SUCCESS,
//             payload: {
// data: sortedCoin.filter((v, i) => {
//     return i < 20;
// }),
//                 loading: false,
//             },
//         });
//     } catch (error) {
//         dispatch({ type: GET_COIN_FAILURE, payload: false });
//     }
// };

// create saga

function* getCoinSaga(action) {
    yield put({ type: GET_COIN_LOADING, payload: true });
    try {
        const coins = yield call(fetchCoin);
        const compare = (key) => (a, b) => a[key] - b[key];
        const sortedCoin = coins.data.sort(compare("rank"));
        yield put({
            type: GET_COIN_SUCCESS,
            payload: {
                data: sortedCoin.filter((v, i) => {
                    return i < 20;
                }),
            },
        });
        yield put({ type: GET_COIN_LOADING, payload: false });
    } catch (error) {
        yield put({ type: GET_COIN_FAILURE });
        yield put({ type: GET_COIN_LOADING, payload: false });
    }
}

export function* watchCoin() {
    yield takeEvery(GET_COIN_FENDING, getCoinSaga);
}

// initial state

const initialState = {
    loading: true,
    data: null,
};

// reducer

const coins = handleActions(
    {
        [GET_COIN_FENDING]: (state, action) => ({
            ...state,
        }),
        [GET_COIN_SUCCESS]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [GET_COIN_FAILURE]: (state, action) => ({
            ...state,
        }),
        [GET_COIN_LOADING]: (state, action) => ({
            ...state,
            loading: action.payload,
        }),
    },
    initialState,
);

export default coins;
