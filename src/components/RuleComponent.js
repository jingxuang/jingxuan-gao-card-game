import {Component} from 'react';

class Rule extends Component {
    render() {
        return(
            <div className="rule-body">
                <h2 className="rule-title">Rules</h2>
                <p>The object of the game is to identify a 'Set' of three cards from 12 cards laid out on the table. Each card has a variation of the following four features:</p>
                <p>(A) COLOR: <br/> &emsp; Each card is red, green, or purple.</p>
                <p>(B) SYMBOL: <br/> &emsp; Each card contains ovals, squiggles, or diamonds.</p>
                <p>(C) NUMBER: <br/> &emsp; Each card has one, two, or three symbols.</p>
                <p>(D) SHADING: <br/> &emsp; Each card is solid, open, or striped.</p>
                <p>A 'Set' consists of three cards in which each feature is EITHER the same on each card OR is different on each card. That is to say, any feature in the 'Set' of three cards is either common to all three cards or is different on each card.</p>
            </div>
        );
    }
}

export default Rule;