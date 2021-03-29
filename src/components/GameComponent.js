import {Button} from '@material-ui/core';
import {Component} from 'react';
import Card from './CardComponent';

class Game extends Component {

    renderCards() {
        let tableRows = [[], [], []];

        for(var index = 0; index < this.props.game.cards.length; index++) {

            let card = this.props.game.cards[index];
            let name = card[0] + "_" + card[1] + "_" + card[2];
            let num = card[3];

            tableRows[index % 3].push(<Card key={index} id={index} name={name} num={num} game={this.props.game} select={this.props.select}/>)
        }

        return tableRows.map((row, i) => <tr key={i}>{row}</tr>);
    }

    render() {
        if(this.props.game.remains.length === 0 && this.props.game.cards.length === 0) {
            return (<div>
                <h1>Congrats! You win!</h1>
            </div>);
        } else {
            return (
                <div className="game-container">
                    <Button onClick={() => this.props.draw(this.props.game.remains)}> Draw </Button>
                    <Button onClick={() => this.props.reset(this.props.game.level)}> Reset </Button>
                    <table className="game-board">
                        <tbody>
                            {this.renderCards()}
                        </tbody>
                    </table>
                </div>
            );
        }
    }

}

export default Game;