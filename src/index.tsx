import React from "react";
import ReactDOM from "react-dom";
import { App } from "src/core/App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "src/features/state-management/redux-toolkit/store/store";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <CssBaseline />
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
