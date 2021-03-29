import {Component} from 'react';
import {
    Jumbotron,
    Navbar,
    Collapse,
    NavbarToggler,
    NavItem,
    Nav,
} from 'reactstrap';
import {NavLink} from 'react-router-dom';


class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
           isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">Home</NavLink>
                                </NavItem>                               
                                <NavItem>
                                    <NavLink className="nav-link" to="/rule">Rule</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>

                <Jumbotron>
                    <div className="container">
                        <div className="col-12 col-sm-6">
                            <h1>Card Game SET</h1>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Header;