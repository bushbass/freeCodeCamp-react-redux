import { ADD } from '../actions/messageActions';

const initialState = [];
export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
};
