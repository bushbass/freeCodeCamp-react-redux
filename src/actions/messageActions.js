export const ADD = 'ADD';
export const DELETE = 'DELETE';

export const addMessage = message => {
  return {
    type: ADD,
    message
  };
};

export const removeMessage = id => {
  return {
    type: DELETE,
    id
  };
};
