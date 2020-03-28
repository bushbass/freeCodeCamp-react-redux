import { ADD, DELETE } from '../actions/messageActions';

const initialState = [];
export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    case DELETE:
      return state.filter((item, index) => index !== action.index);
    default:
      return state;
  }
};
