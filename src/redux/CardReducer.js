import * as ActionTypes from './ActionTypes';

export const CardReducer = (state = {
    set: [],
    cards: [],
    remains: [],
}, action) => {
    switch (action.type) {
        case ActionTypes.FIND_SET:
            return {...state, set: action.cards};
        case ActionTypes.INIT_CARD:
            return { ...state, cards: action.cards, remains: action.remains};
        case ActionTypes.DRAW_CARD:
            return {...state, cards: state.cards.concat(action.cards)};
        default:
            return state;
    }
}