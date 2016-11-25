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
            leagueName: '',
            team: '',
            linkTeam: '',
            allLeagues: this.eventRequestAllLeagues(),
        };
        this.eventRequest = this.eventRequest.bind(this);
        this.getTeamName = this.getTeamName.bind(this);
    };

    render() {
      let component = null
      if(this.state.allLeagues) {
          component = <div>
                          <Header {...this.getHeaderProps()}/>
                          <Center {...this.getCenterProps()} />
                      </div>;
      }
        return (
            <div >
                <MuiThemeProvider>
                    {component}
                </MuiThemeProvider>
            </div>
        );
    }

    getCenterProps() {
        return {
            league: this.state.league,
            team: this.state.team,
            linkTeam: this.state.linkTeam,
            getTeamName: this.getTeamName,
            leagueName: this.state.leagueName,
        }
    };

    getHeaderProps() {
        return {
            requestCompetition:this.eventRequest,
            team:this.state.team,
            allLeagues:this.state.allLeagues,
        }
    }

    getTeamName(team, linkTeam) {
        this.setState({ team: team });
        this.setState({ linkTeam: linkTeam });
    }

    eventRequestAllLeagues () {
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'http://api.football-data.org/v1/competitions/?season=2015', true);
        xhttp.setRequestHeader("X-Auth-Token", keyApi);
        xhttp.onreadystatechange = function(event) {

            if (xhttp.readyState === XMLHttpRequest.DONE) {
                let response = JSON.parse(event.target.response);
                this.setState({
                    allLeagues: response,
                 });
            }
        }.bind(this)
        xhttp.send();
    }

    eventRequest () {
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', 'http://api.football-data.org/v1/competitions/398/leagueTable', true);
        xhttp.setRequestHeader("X-Auth-Token", keyApi);
        xhttp.onreadystatechange = function(event) {

            if (xhttp.readyState === XMLHttpRequest.DONE) {
                let response = JSON.parse(event.target.response);
                this.setState({
                    league: response.standing,
                    leagueName: response.leagueCaption,
                 });
            }
        }.bind(this)
        xhttp.send();
    }
};

export default App
