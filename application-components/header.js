import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import _ from 'lodash';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allLeagues: this.props.allLeagues,
        };
    }

    render() {
        let component = null;

        if (this.props.team) {
            component = <h1 className="header__title">Team Info</h1>
        }
        else {
            component = <div>
                            <Toolbar>
                                <ToolbarGroup >
                                    <AutoComplete
                                      hintText="(not working, just press button)"
                                      filter={this.filterLeague()}
                                      openOnFocus={true}
                                      dataSource={this.props.allLeagues} />
                                    <RaisedButton label="Search" primary={true}
                                        className="header__button" onClick={this.handlerClick.bind(this)} />
                                </ToolbarGroup>
                            </Toolbar>
                        </div>
        }
        return (
            <div>
                {component}
            </div>
        )
    }

    filterLeague() {
    }

    getDataSource() {
        if (this.state.allLeagues) {
            return (this.state.allLeagues)
        }

    }

    handlerClick() {
        this.props.requestCompetition();
    }
};
export default Header
