import {Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Game from './GameComponent';
import Rule from './RuleComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { drawCards, initGame, selectCard, setGameLevel } from '../redux/ActionCreator';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        game: state.game,
    }
}

const mapDispatchToProps = dispatch => ({
    setGameLevel: (level) => {dispatch(setGameLevel(level))},
    initGame: (level) => {dispatch(initGame(level))},
    drawCards: (remains) => {dispatch(drawCards(remains))},
    selectCard: (game, index) => {dispatch(selectCard(game, index))}
})

class Main extends Component {

    render() {
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path='/home' component={() => <Home initGame={this.props.initGame} level={this.props.game.level} handleLevel={this.props.setGameLevel}/>} />
                    <Route exact path='/game' component={() => <Game game={this.props.game} draw={this.props.drawCards} reset={this.props.initGame} select={this.props.selectCard}/>} />
                    <Route exact path='/rule' component={Rule} />
                    <Redirect to='/home' />
                </Switch> 
            </div>
        );
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Main));