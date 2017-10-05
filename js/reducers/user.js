import { SET_USER } from '../actions/user';

export type State = {
    name: string
}

const initialState = {
  name: '',
};

export default function (state = initialState, action) {
  if (action.type === SET_USER) {
    return {
      ...state,
      name: action.payload,
    };
  }
  return state;
}
