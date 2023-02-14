import "./App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  // API_TOKEN = "6ee850597cbd431c94a2012b1101c95f";
  API_TOKEN = "467946ad2bff40659bd5560046164870";
  pageSize = 8;

  state = {
    query: "",
  };

  // constructor() {
  //   super();
  //   this.state = {
  //     query: "",
  //   };
  // }

  componentDidUpdate() {
    // console.log("Updated");
    console.log(this.state.query);
  }

  newsQuery = (str) => {
    console.log(str);
    this.setState({ query: str });
  };

  render() {
    return (
      <Router>
        <NavBar title="NewsMonkey" newsQuery={this.newsQuery} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key="general"
                headline="NewsMonkey Top Headlines"
                pageSize={this.pageSize}
                country="in"
                token={this.API_TOKEN}
                category="general"
                query={this.state.query}
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
                pageSize={this.pageSize}
                country="in"
                token={this.API_TOKEN}
                category="sports"
                query={this.state.query}
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
                pageSize={this.pageSize}
                country="in"
                token={this.API_TOKEN}
                category="business"
                query={this.state.query}
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
                pageSize={this.pageSize}
                country="in"
                token={this.API_TOKEN}
                category="entertainment"
                query={this.state.query}
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
                pageSize={this.pageSize}
                country="in"
                token={this.API_TOKEN}
                category="health"
                query={this.state.query}
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
                pageSize={this.pageSize}
                country="in"
                token={this.API_TOKEN}
                category="science"
                query={this.state.query}
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
                pageSize={this.pageSize}
                country="in"
                token={this.API_TOKEN}
                category="technology"
                query={this.state.query}
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}
