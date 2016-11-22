import React from 'react';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Game from './game';

const keyApi = '86aebf1fe1ad42d8b41ad1af52dc8f53';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      league: [],
    };
    this.renderGame = this.renderGame.bind(this);
    this.eventRequest = this.eventRequest.bind(this);
  };

  render() {
    console.log(this.state.league)
    return (
      <div >
        <MuiThemeProvider >
            <div>
            <RaisedButton label="Get Info" primary={true} className="application__button" onClick={this.eventRequest} />
            <Game league={this.state.league} />
            </div>
        </MuiThemeProvider>
      </div>
    );
  }
    testingObj () {
        console.dir(objeto)
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

    renderGame() {
        return (
            <div>
                <p>Hola</p>
            </div>
        )
    }
};

export default App
