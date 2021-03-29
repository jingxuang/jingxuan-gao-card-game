import {Component} from 'react';

class Card extends Component {
    
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }


    onClick() {
        this.props.select(this.props.game, this.props.id);
    }

    onMouseEnter(event) {
        if(event.currentTarget.style.backgroundColor === "skyblue") return;
        event.currentTarget.style.backgroundColor = "lightgrey";
    }

    onMouseLeave(event) {
        if(event.currentTarget.style.backgroundColor === "skyblue") return;
        event.currentTarget.style.backgroundColor = "whitesmoke";
    }

    render() {

        const image_url = () => {
            return "../images/cards/" + this.props.name + ".png";
        }

        const isSelected = () => this.props.game.selected.includes(this.props.id);

        const content = () => {
            let res = [];
            for(var n = 0; n < this.props.num; n++) {
                res.push(<img className="my-card-image" src={image_url()} alt={this.props.name} id={this.props.name} key={this.props.name + "_" + n}/>)
            }
            return res;
        }       

        return (
            <td className="my-card" align="center" style={{backgroundColor: isSelected() ? "skyblue" : "whitesmoke"}} 
            onClick={this.onClick} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}> {content()} </td>
        );
    }
}

export default Card;