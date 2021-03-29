import * as ActionTypes from './ActionTypes';
import {CARD_SET, CARD_SET_EASY} from '../shared/cards';
import { store } from 'react-notifications-component';

export const setGameLevel = (level) => ({
    type: ActionTypes.SET_LEVEL,
    level: level
});

export const initGame = (level) => {
    let remains = level === 'easy' ? CARD_SET_EASY.slice() : CARD_SET.slice();
    let cards = getCards(remains, 12);

    // TODO what to do when no cards could be drew. 
    while(level === 'medium' && !hasSet(cards)) {
        cards = cards.concat(getCards(remains, 3));
    }

    return ({
        type: ActionTypes.INIT_GAME,
        level: level,
        remains: remains,
        cards: cards
    });
}

export const drawCards = (remains) => {
    let cards = getCards(remains, 3);

    return ({
        type: ActionTypes.DRAW_CARD,
        remains: remains,
        cards: cards
    });
}

export const selectCard = (game, index) => {

    // If the card is already selected before, unselect it.
    let exist = game.selected.indexOf(index)
    if(exist !== -1) {
        game.selected.splice(exist, 1);
        return ({
            type: ActionTypes.UNSELECT_CARD,
            payload: game.selected
        });
    }

    if(game.selected.length < 2) {
        return ({
            type: ActionTypes.SELECT_CARD,
            payload: index
        });
    }

    let candidates = [game.cards[game.selected[0]], game.cards[game.selected[1]], game.cards[index]];

    if(isValid(candidates)) { // 

        store.addNotification({
            title: "Wonderful!",
            message: "You found a set",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 1000,
                onScreen: true
              }
        });

        // remove these three cards from the current cards set. 
        let toDelete = game.selected.concat(index).sort((a, b) => a - b); ;

        for(var i = 2; i >= 0; i--) {
            game.cards.splice(toDelete[i], 1);
        }

        // Draw cards if there are less than 12 cards in the game board.
        while(game.cards.length < 12 && game.remains.length > 0) {
            game.cards = game.cards.concat(getCards(game.remains, 3));
        }

        return ({
            type: ActionTypes.VALID_SET,
            cards: game.cards,
            remains: game.remains
        });
    } else { 

        store.addNotification({
            title: "Oops!",
            message: "That's not a set",
            type: "danger",
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 2000,
                onScreen: true
              }
        });

        return ({
            type: ActionTypes.INVALID_SET
        })
    }
}


/**
 * Generate 12 cards based on given features.
 * @param {*} features 
 */
function getCards(remains, num) {
    // If there is no enough remains, return empty;
    if(num > remains.length) return [];

    let cards = [];

    for(var i = 0; i < num; i++) {
        var index = random(remains.length);
        cards.push(remains[index]);
        remains.splice(index, 1);
    }

    return cards;
}

function hasSet(cards) {
    for(var i = 0; i < cards.length - 2; i++) {
        for(var j = i+1; j < cards.length - 1; j++) {
            for(var k = j + 1; k < cards.length; k++) {
                if(isValid([cards[i], cards[j], cards[k]]))
                    return true;
            }
        }
    }
    return false;
}

function isValid(candidates) {
    return ((candidates[0][0] === candidates[1][0] && candidates[0][0] === candidates[2][0] && candidates[1][0] === candidates[2][0])
    || (candidates[0][0] !== candidates[1][0] && candidates[0][0] !== candidates[2][0] && candidates[1][0] !== candidates[2][0]))
    && ((candidates[0][1] === candidates[1][1] && candidates[0][1] === candidates[2][1] && candidates[1][1] === candidates[2][1])
    || (candidates[0][1] !== candidates[1][1] && candidates[0][1] !== candidates[2][1] && candidates[1][1] !== candidates[2][1]))
    && ((candidates[0][2] === candidates[1][2] && candidates[0][2] === candidates[2][2] && candidates[1][2] === candidates[2][2])
    || (candidates[0][2] !== candidates[1][2] && candidates[0][2] !== candidates[2][2] && candidates[1][2] !== candidates[2][2]))
    && ((candidates[0][3] === candidates[1][3] && candidates[0][3] === candidates[2][3] && candidates[1][3] === candidates[2][3])
    || (candidates[0][3] !== candidates[1][3] && candidates[0][3] !== candidates[2][3] && candidates[1][3] !== candidates[2][3]));
}

const random = (len) => Math.floor(Math.random() * len);