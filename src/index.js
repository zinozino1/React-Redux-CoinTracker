import React from "react";
import ReactDOM from "react-dom";

import App from "./App.jsx";
import { Provider } from "react-redux";
import rootReducer, { rootSaga } from "./modules";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const logger = createLogger();
const store = createStore(
    rootReducer,
    applyMiddleware(logger, ReduxThunk, sagaMiddleware),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);
