import React from 'react';
import Game from './game';
import Team from './team';

class Center extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    render() {
        let component = null;

        if (this.props.team) {
            component = <Team team={this.props.team} />
        }
        else {
            component = <Game league={this.props.league} getTeamName={this.props.getTeamName} />
        }

        return (
            <div>
                {component}
            </div>
        );
    }
};

export default Center
