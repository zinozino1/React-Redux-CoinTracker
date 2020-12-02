import { combineReducers } from "redux";
import coins from "./coins";
import { watchCoin } from "./coins";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({ coins });

export function* rootSaga() {
    yield all([watchCoin()]);
}

export default rootReducer;
