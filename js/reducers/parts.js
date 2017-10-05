import {SET_INDEX} from "../actions/list";

const initialState = [
    {
        name: 'Statement',
        filmed: false
    }, {
        name: 'Working context',
        filmed: false
    }, {
        name: 'Task description',
        filmed: false
    }, {
        name: 'What went well or wrong',
        filmed: false
    }, {
        name: 'Lesson learned',
        filmed: false
    }, {
        name: 'Lesson learned measures',
        filmed: false
    }, {
        name: 'Applicability and delimitations',
        filmed: false
    }
];

export default function(state = initialState, action) {
    if (action.type === SET_INDEX) {
        return {
            ...state,
            selectedIndex: action.payload
        };
    }
    return state;
}
