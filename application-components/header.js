import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <RaisedButton label="Get Info" primary={true} className="application__button" onClick={this.handlerClick.bind(this)} />
            </div>
        )
    }

    handlerClick() {
        this.props.requestCompetition();
    }
};
export default Header
