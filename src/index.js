import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Weather from "./Components/Wether"
import store from "./store";
import { Provider } from "react-redux";

const App = () =>{
    return(
      <Provider store={store}>
        <Weather />
      </Provider>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"));