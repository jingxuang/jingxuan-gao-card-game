import * as ActionTypes from './ActionTypes';

export const GameReducer = (state = {
    level: 'easy',
    cards: [],
    remains: [],
    selected: [],
    isAuto: false,
}, action) => {
    switch (action.type) {
        case ActionTypes.SET_LEVEL:
            return {...state, level: action.level};
        case ActionTypes.INIT_GAME:
            if(action.level === 'easy') {
                return {...state,
                    remains: action.remains,
                    cards: action.cards,
                    selected: [],
                    isAuto: true,
                }
            } else if(action.level === "medium") {
                return {...state,
                    remains: action.remains,
                    cards: action.cards,
                    selected: [],
                    isAuto: true,
                }
            } else {
                return {...state,
                    remains: action.remains,
                    cards: action.cards,
                    selected: [],
                    isAuto: false,
                }
            }
        case ActionTypes.DRAW_CARD:
            return {...state,
                remains: action.remains,
                cards: state.cards.concat(action.cards),
                selected: []
            };
        case ActionTypes.VALID_SET:
            return {...state,
                cards: action.cards,
                remains: action.remains,
                selected: []
            };
        case ActionTypes.INVALID_SET:
            return {...state,
                selected: []
            };
        case ActionTypes.SELECT_CARD:
            return {...state,
                selected: state.selected.concat(action.payload)
            }
        case ActionTypes.UNSELECT_CARD:
            return {...state,
                selected: action.payload
            }
        default:
            return state;
    }
}
