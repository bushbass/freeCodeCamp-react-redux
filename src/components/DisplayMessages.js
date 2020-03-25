import React from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions/messageActions';

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // add handleChange() and submitMessage() methods here
  handleChange(event) {
    this.setState({ input: event.target.value });
  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState({ input: '' });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input onChange={this.handleChange} value={this.state.input} />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {console.log(this.props)}
          {this.props.messages.messages.map((item, index) => {
            return <li key={index}>{item}</li>;
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayMessages);
