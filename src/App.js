import { Route, Routes } from "react-router-dom";
import "../src/components/Merch.css";
import Login from "./components/Login";
import Sign from "./components/Sign";
import Home from "./components/Home";
import { Provider } from "react-redux";
import store from "./components/store";
import Product from "./components/Product";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/" exact Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/Sign" Component={Sign} />
          <Route path="/Product" Component={Product} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
