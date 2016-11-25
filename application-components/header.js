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
      let component = null;

      if (this.props.team) {
        component = <h1 className="header__title">Team Info</h1>
      }
      else {
        component = <RaisedButton label="Get Info" primary={true} className="header__button" onClick={this.handlerClick.bind(this)} />
      }
        return (
            <div>
                {component}
            </div>
        )
    }

    handlerClick() {
        this.props.requestCompetition();
    }
};
export default Header
