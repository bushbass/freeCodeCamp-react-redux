import React from "react";
import { addMessage } from "../actions/messageActions";
import { connect } from "react-redux";

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: ""
    });
  }

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>

        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.input}
        />
        <button onClick={this.submitMessage}>Add message</button>
        <ul>
          {this.props.messages.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submitNewMessage: function(message) {
      dispatch(addMessage(message));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DisplayMessages);
