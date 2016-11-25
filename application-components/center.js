import React from 'react';
import Game from './game';
import Team from './team';
import Fixture from './fixture';
import Template from './template';

class Center extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          fix: {},
          temp: {},
        };
        this.getFix = this.getFix.bind(this);
        this.getTemp = this.getTemp.bind(this);
    };

    render() {
        let component = null;

        if (this.props.team) {
              component = <Team team={this.props.team} linkTeam={this.props.linkTeam}
                getFix={this.getFix} getTemp={this.getTemp} />
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

    getFix(fixture) {
      this.setState({ fix: fixture })
    }

    getTemp(template) {
      this.setState({ temp: template })
    }
};

export default Center
