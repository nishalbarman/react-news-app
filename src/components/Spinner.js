import React, { Component } from "react";
import spinner from "./loading.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src={spinner}
          alt="Loading"
          style={{ width: "150px", height: "150px" }}
        />
      </div>
    );
  }
}

export default Spinner;
