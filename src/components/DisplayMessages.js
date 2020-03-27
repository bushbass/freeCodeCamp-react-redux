import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions/messageActions';
import { removeMessage } from '../actions/messageActions';

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
  }
  // add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState({ input: '' });
  }
  deleteMessage(index) {
    this.props.deleteNewMessage(index);
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input onChange={this.handleChange} value={this.state.input} />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.messages.map((item, index) => {
            return (
              <li key={index}>
                {item}{' '}
                <button onClick={() => this.deleteMessage(index)}>
                  &times;
                </button>
              </li>
            );
          })}
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
    },
    deleteNewMessage: function(index) {
      dispatch(removeMessage(index));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayMessages);
