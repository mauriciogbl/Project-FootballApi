import React from 'react';
import TeamInfo from './teamInfo';
import Fixture from './fixture';
import Template from './template';
import RaisedButton from 'material-ui/RaisedButton';

const keyApi = '86aebf1fe1ad42d8b41ad1af52dc8f53';
let flag = 0;

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renderMode: 'teamInfo',
      team: [],
    };
  };

  render() {
    this.eventRequest()
    return (
        <div>
            <TeamInfo team={this.state.team} getFix={this.props.getFix} getTemp={this.props.getTemp} />
        </div>
    )
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
export default Team
