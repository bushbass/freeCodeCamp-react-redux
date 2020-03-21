import React, { Component } from "react";
import ThirdLevel from "./ThirdLevel";
export default class SubArea extends Component {
  render() {
    return (
      <div style={{ border: "1px solid black", margin: 3 }}>
        <h5>Sub Area Component</h5>
        <ThirdLevel />
      </div>
    );
  }
}
