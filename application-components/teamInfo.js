import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

class TeamInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      teamLink: '',
    };
  };
    render() {
      console.log("probando", this.props.team._links)
      return (
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
                <RaisedButton label="Fixture" primary={true} onClick={this.handlerClickFixture().bind(this)} />
                <RaisedButton label="Template" primary={true} onClick={this.handlerClickTemplate().bind(this)} />
            </CardActions>
        </Card>
      )
  };

  handlerClickFixture() {
    this.props.getFix(this.props.team._links);
  }

  handlerClickTemplate() {
    this.props.getTemp(this.props.team._links);
  }

}
export default TeamInfo
