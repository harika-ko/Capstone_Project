export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";

export const addFavourite = (recipe) => ({
    type: ADD_FAVOURITE,
    payload: recipe,
});

export const removeFavourite = (recipe) => ({
    type: REMOVE_FAVOURITE,
    payload: recipe,
});