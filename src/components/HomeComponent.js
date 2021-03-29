import {Component} from 'react';
import {Link} from 'react-router-dom';
import { MenuItem, FormHelperText, Select, Button} from '@material-ui/core';

class Home extends Component {

    handleLevelChange = (e) => {
        this.props.handleLevel(e.target.value);
    }

    initGame = (level) => {
        this.props.initGame(level);
    }

    render() {
        // TODO fix the issues that don't display selected values. 
        console.log("Home > render()")
        return(
            <div className="container">
                <Select className="level-select col-3" value={this.props.level} onChange={this.handleLevelChange}>
                    <MenuItem value={'easy'}> Easy </MenuItem>
                    <MenuItem value={'medium'}> Medium </MenuItem>
                    <MenuItem value={'hard'}> Hard </MenuItem>
                </Select>
                <Button className="go-game-button" onClick={() => this.initGame(this.props.level)}><Link to='/game'>Go Play!</Link></Button>
                <FormHelperText>Select the LEVEL of your game First</FormHelperText>
            </div>
        );
    }
}

export default Home;