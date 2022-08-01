import { ADD_FAVOURITE, REMOVE_FAVOURITE } from '../actions';

const initialState = {
    favourites: [],
};

const favouritesReducer = (state = initialState.favourites, action) => {
    const { type, payload } = action;

    switch (type) {
        case ADD_FAVOURITE:
            return {
                ...state,
                favourites: [...state.favourites, payload],
            };
        case REMOVE_FAVOURITE:
            return {
                ...state,
                favourites: state.favourites.filter((recipe) => recipe !== payload),
            };
        default:
            return state;
    }
};

export default favouritesReducer;