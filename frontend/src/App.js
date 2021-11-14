import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";
import Product from "./pages/Product";
import Market from "./pages/Market";
import ScrollToTop from "./components/ScrollToTop";
import Temp from "./pages/temp"
function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Switch>
          <Route path="/test" exact component={Temp} />
            <Route path="/" exact component={Home} />
            <Route path="/shop/:cat/:set" component={Shop} />
            <Route path="/shop/:cat" component={Shop} />
            <Route path="/shop" component={Shop} />
            <Route path="/product/:id/:cardNumber" component={Product} />
            <Route path="/market" component={Market} />
            <Route path="/sign-up" component={SignUp} />
          </Switch>
          {/* <Footer /> */}
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
