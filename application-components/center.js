import React from 'react';
import Game from './game';
import Team from './team';

const keyApi = '86aebf1fe1ad42d8b41ad1af52dc8f53';
let flag = 0;

class Center extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            team: {},
        };

    };

    render() {
        if (this.props.linkTeam) {
            this.eventRequest()
        }
        let component = null;

        if (this.props.team) {
            component = <Team {...this.getTeamProps()} />
        }
        else {
            component = <Game {...this.getGameProps()} />
        }

        return (
            <div>
                {component}
            </div>
        );
    }

    getTeamProps() {
        return {
            team: this.state.team,
            linkTeam: this.props.linkTeam,
        }
    }

    getGameProps() {
        return {
            league: this.props.league,
            getTeamName: this.props.getTeamName,
            leagueName: this.props.leagueName,
        }
    }

    eventRequest () {

        if(flag === 0) {
            let xhttp = new XMLHttpRequest();
            xhttp.open('GET', this.props.linkTeam, true);
            xhttp.setRequestHeader("X-Auth-Token", keyApi);
            xhttp.onreadystatechange = function(event) {

                if (xhttp.readyState === XMLHttpRequest.DONE) {
                    let response = JSON.parse(event.target.response);
                    this.setState({ team: response });
                }
            }.bind(this)
            flag = 1;
            xhttp.send();
        }
    }
};

export default Center
