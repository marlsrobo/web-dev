import {UPDATE_TUIT, CREATE_TUIT, DELETE_TUIT, FIND_ALL_TUITS} from "../Actions/tuits-actions";

const TuitsReducer = (state = [], action) => {
    switch (action.type) {
        case FIND_ALL_TUITS:
            return action.tuits;
        case DELETE_TUIT:
            return state.filter(tuit => tuit._id !== action.tuit._id);
        case CREATE_TUIT:
            return [
                action.newTuit,
                ...state
            ];
        case UPDATE_TUIT:
            return state.map(tuit => tuit._id === action.tuit._id ? action.tuit : tuit);
        default:
            return state;
    }
}

export default TuitsReducer;