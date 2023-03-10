import React, { Component } from "react";
import { Link } from "react-router-dom";

export class NavBar extends Component {
  // query = "";
  state = {
    search: "",
  };

  handleDefaultSubmit = (event) => {
    event.preventDefault();
  };

  // constructor() {
  //   super();
  // }

  handleOnChange = (event) => {
    this.setState({ search: event.target.value });
  };

  searchBtnHandler = () => {
    this.props.newsQuery(this.state.search);
  };

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              {this.props.title}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    HOME
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Category
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/business">
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/entertainment">
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/general">
                        General
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/health">
                        Health
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/science">
                        Science
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/sports">
                        Sports
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/technology">
                        Technology
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Abount US
                  </Link>
                </li>
              </ul>
              <form
                className="d-flex"
                role="search"
                onSubmit={this.handleDefaultSubmit}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={this.handleOnChange}
                />
                <button
                  className="btn btn-outline-success"
                  type="submit"
                  onClick={this.searchBtnHandler}>
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;
