import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  // 6ee850597cbd431c94a2012b1101c95f -- News Api Key

  render() {
    return (
      <Router>
        <NavBar title="NewsMonkey" />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="general"
                headline="NewsMonkey Top Headlines"
                pageSize="8"
                country="in"
                token="6ee850597cbd431c94a2012b1101c95f"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                key="general"
                headline="NewsMonkey Top Headlines"
                pageSize="8"
                country="in"
                token="6ee850597cbd431c94a2012b1101c95f"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                key="sports"
                headline="NewsMonkey Top Headlines"
                pageSize="8"
                country="in"
                token="6ee850597cbd431c94a2012b1101c95f"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                key="business"
                headline="NewsMonkey Top Headlines"
                pageSize="8"
                country="in"
                token="6ee850597cbd431c94a2012b1101c95f"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                headline="NewsMonkey Top Headlines"
                pageSize="8"
                country="in"
                token="6ee850597cbd431c94a2012b1101c95f"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                key="health"
                headline="NewsMonkey Top Headlines"
                pageSize="8"
                country="in"
                token="6ee850597cbd431c94a2012b1101c95f"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                key="science"
                headline="NewsMonkey Top Headlines"
                pageSize="8"
                country="in"
                token="6ee850597cbd431c94a2012b1101c95f"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                key="technology"
                headline="NewsMonkey Top Headlines"
                pageSize="8"
                country="in"
                token="6ee850597cbd431c94a2012b1101c95f"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}
