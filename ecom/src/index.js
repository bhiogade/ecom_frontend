import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import App from "./App";
import "./index.css";
import productReducer from "./reducer/productsReducer";

const store = createStore(productReducer);

ReactDOM.render(
  <React.StrictMode>
    
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>

  </React.StrictMode>
  ,
  document.getElementById('root')
);


