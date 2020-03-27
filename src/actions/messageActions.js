export const ADD = 'ADD';
export const DELETE = 'DELETE';

export const addMessage = message => {
  return {
    type: ADD,
    message
  };
};

export const removeMessage = index => {
  return {
    type: DELETE,
    index
  };
};
