import React from "react";
import { connect } from "react-redux";

const AnotherComponent = props => {
  return (
    <div>
      <h3>'AnotherComponent' just showing state from the Redux store</h3>
      {props.messages.map(item => (
        <li key={item}>{item}</li>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  messages: state
});

export default connect(mapStateToProps)(AnotherComponent);
