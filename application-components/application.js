import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Center from './center';
import Header from './header';

const keyApi = '86aebf1fe1ad42d8b41ad1af52dc8f53';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      league: [],
      team: '',
    };
    this.eventRequest = this.eventRequest.bind(this);
    this.getTeamName = this.getTeamName.bind(this);
  };

  render() {
    return (
      <div >
        <MuiThemeProvider>
            <div>
            <Header requestCompetition={this.eventRequest}/>
            <Center {...this.getCenterProps()} />
            </div>
        </MuiThemeProvider>
      </div>
    );
  }
    getTeamName(team) {
        this.setState({ team: team });
    }

    getCenterProps() {
        return {
            league: this.state.league,
            team: this.state.team,
            getTeamName: this.getTeamName,
        }
    };

    eventRequest () {
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'http://api.football-data.org/v1/competitions/398/leagueTable', true);
        xhttp.setRequestHeader("X-Auth-Token", keyApi);
        xhttp.onreadystatechange = function(event) {

            if (xhttp.readyState === XMLHttpRequest.DONE) {
                let response = JSON.parse(event.target.response);
                this.setState({ league: response.standing });
            }
        }.bind(this)
        xhttp.send();
    }
};

export default App
