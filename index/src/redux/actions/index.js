export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const addFavourite = (recipe) => ({
    type: ADD_FAVOURITE,
    payload: recipe,
});

export const removeFavourite = (recipe) => ({
    type: REMOVE_FAVOURITE,
    payload: recipe,
});

export const addToCartAction = (product) => ({
    type: ADD_TO_CART,
    payload: product,
})

export const removeFromCartAction = (indexToRemove) => {
    return {
        type: REMOVE_FROM_CART,
        payload: indexToRemove,
    }
}