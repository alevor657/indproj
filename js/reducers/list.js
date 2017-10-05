import { SET_INDEX } from "../actions/list";

export type State = {
  list: string
};

const initialState = {
    list: [
        "My Profile",
        "My Videos",
        "Make a new video",
        "Tutorial"
    ],
    selectedIndex: undefined
};

export default function(state = initialState, action) {
  if (action.type === SET_INDEX) {
    return {
      ...state,
      selectedIndex: action.payload
    };
  }
  return state;
}
