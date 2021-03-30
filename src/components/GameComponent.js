import {Button} from '@material-ui/core';
import {Component} from 'react';
import Card from './CardComponent';
import {getSet} from '../redux/ActionCreator';
import { store } from 'react-notifications-component';
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

    findSet(cards) {
        let set = getSet(cards);

        if(set.length === 0) {
            store.addNotification({
                title: "Tips",
                message: "There is no set exist, please draw more",
                type: "info",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });         
        } else {
            store.addNotification({
                title: "Tips",
                message: "Here's a set (index): " + set,
                type: "info",
                insert: "top",
                container: "top-right",
                animationIn: ["animate__animated", "animate__fadeIn"],
                animationOut: ["animate__animated", "animate__fadeOut"],
                dismiss: {
                    duration: 5000,
                    onScreen: true
                }
            });   
        }

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
                    <Button onClick={() => this.findSet(this.props.game.cards)}> Find Set </Button>
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