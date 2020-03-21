import React, { Component } from "react";
import AnotherComponent from "./AnotherComponent";
export default class ThirdLevel extends Component {
  render() {
    return (
      <div style={{ border: "1px solid black", margin: 3 }}>
        <h5>Third level deep Component</h5>
        <AnotherComponent />
      </div>
    );
  }
}
