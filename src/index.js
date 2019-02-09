// import react core
import React from "react";
import ReactDOM from "react-dom";

// import redux core
import { createStore } from "redux";
import rootReducer from "./store/modules";
import { Provider } from "react-redux";

// import src
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// 크롬 리덕스 데브 확장을 사용하기 위해
const devTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTool);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.register();
