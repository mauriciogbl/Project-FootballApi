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
      linkTeam: '',
      fixtureTeam: {},
      templateTeam: {},
    };
    this.eventRequest = this.eventRequest.bind(this);
    this.getTeamName = this.getTeamName.bind(this);
    this.getFixtureTeam = this.getFixtureTeam.bind(this);
    this.getTemplateTeam = this.getTemplateTeam.bind(this);
  };

  render() {
    return (
      <div >
        <MuiThemeProvider>
            <div>
            <Header requestCompetition={this.eventRequest} team={this.state.team}/>
            <Center {...this.getCenterProps()} />
            </div>
        </MuiThemeProvider>
      </div>
    );
  }

    getCenterProps() {
      return {
        league: this.state.league,
        team: this.state.team,
        linkTeam: this.state.linkTeam,
        fixtureTeam: this.state.fixtureTeam,
        templateTeam: this.state.templateTeam,
        getTeamName: this.getTeamName,
        getFixtureTeam: this.getFixtureTeam,
        getTemplateTeam: this.getTemplateTeam,
      }
    };

    getFixtureTeam(fixture) {
      this.setState({ fixtureTeam: fixture });
    }

    getTeamName(team, linkTeam) {
      this.setState({ team: team });
      this.setState({ linkTeam: linkTeam });
    }


    getTemplateTeam(template) {
      this.setState({ templateTeam: template });
    }

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
