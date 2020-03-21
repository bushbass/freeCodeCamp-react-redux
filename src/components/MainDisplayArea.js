import React, { Component } from "react";
import SubArea from "./SubArea";
export default class MainDisplayArea extends Component {
  render() {
    return (
      <div style={{ border: "1px solid black", margin: 3 }}>
        <h4>Main Area Component</h4>
        <SubArea />
      </div>
    );
  }
}
