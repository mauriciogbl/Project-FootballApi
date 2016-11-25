import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Fixture from './fixture';
import Template from './template';

const keyApi = '86aebf1fe1ad42d8b41ad1af52dc8f53';

class TeamInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            team: props.team,
            fixture: {},
            template: {},
            fixtureShow: false,
            templateShow: false,
        };
    };

    componentWillReceiveProps (nextProps) {
        this.setState({
            team: nextProps.team
        });
    };

    render() {
        let component = null
        if (this.state.fixtureShow) {
            component = <Fixture fixture={this.state.fixture} />
        }
        else if (this.state.templateShow) {
            component = <Template players={this.state.template} />
        }
        return (
            <div>
                <MuiThemeProvider>
                    <Card>
                        <CardHeader
                            title={this.props.team.name}
                            subtitle={this.props.team.code}
                            avatar={this.props.team.crestUrl}
                        />
                        <CardMedia
                            overlay={<CardTitle title="Template Value" subtitle={this.props.team.squadMarketValue} />}
                            >
                                <img src={this.props.team.crestUrl} className="team__shield"/>
                            </CardMedia>
                            <CardTitle title={this.props.team.name} subtitle={this.props.team.shortName} />
                            <CardText>
                                You may also like to know about...
                            </CardText>
                            <CardActions>
                                <RaisedButton label="Fixture" primary={true} onClick={this.redirect.bind(this, 'fixtures')} />
                                <RaisedButton label="Template" primary={true} onClick={this.redirect.bind(this, 'players')} />
                            </CardActions>
                        </Card>
                    </MuiThemeProvider>
                    {component}
                </div>
            );
        };

        redirect (type) {
            if (this.state.team && this.state.team._links) {
                let xhttp = new XMLHttpRequest();
                xhttp.open('GET', this.state.team._links[type].href, true);
                xhttp.setRequestHeader("X-Auth-Token", keyApi);
                xhttp.onreadystatechange = function(event) {

                    if (xhttp.readyState === XMLHttpRequest.DONE) {
                        let response = JSON.parse(event.target.response);
                        if (type === 'fixtures') {
                            this.setState({
                                fixture: response,
                                fixtureShow: true,
                                templateShow: false,
                            });
                        }
                        else {
                            this.setState({
                                template: response,
                                fixtureShow: false,
                                templateShow: true,
                            });
                        }
                        console.log(this.state.fixture, this.state.fixtureShow, this.state.templateShow);
                    }
                }.bind(this)
                xhttp.send();
            }
        }
    };

    export default TeamInfo
