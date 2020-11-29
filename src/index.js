import React from "react";
import ReactDOM from "react-dom";

import App from "./App.jsx";
import { Provider } from "react-redux";
import rootReducer from "./modules";
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import ReduxThunk from "redux-thunk";

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root"),
);
