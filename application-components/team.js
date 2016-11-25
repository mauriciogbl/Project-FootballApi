import React from 'react';
import TeamInfo from './teamInfo';

const keyApi = '86aebf1fe1ad42d8b41ad1af52dc8f53';
let flag = 0;

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    };

    render() {
        return (
            <div>
                <TeamInfo team={this.props.team} />
            </div>
        )
    }
};
export default Team
