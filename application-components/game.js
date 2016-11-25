import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fixedHeader: true,
            fixedFooter: true,
            stripedRows: false,
            showRowHover: false,
            selectable: true,
            multiSelectable: false,
            enableSelectAll: false,
            deselectOnClickaway: true,
            showCheckboxes: false,
            height: '100%',
            open: false,
            team: '',
        };
    };

    render() {
        return (
            <div >
                <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                    onCellClick={this._onCellClick.bind(this)}
                    >
                        <TableHeader
                            displaySelectAll={this.state.showCheckboxes}
                            adjustForCheckbox={this.state.showCheckboxes}
                            enableSelectAll={this.state.enableSelectAll}
                            >
                                <TableRow>
                                    <TableHeaderColumn colSpan="7" tooltip="Current Season" style={{textAlign: 'center'}}>
                                        <h1>{this.props.leagueName}</h1>
                                    </TableHeaderColumn>
                                </TableRow>
                                <TableRow>
                                    <TableHeaderColumn tooltip="The Position">Position</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="The Team">Team</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="The Points">Points</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="Played Games">Played Games</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="The Wins">Wins</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="The Draws">Draws</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="The Losses">Losses</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody
                                displayRowCheckbox={this.state.showCheckboxes}
                                deselectOnClickaway={this.state.deselectOnClickaway}
                                showRowHover={this.state.showRowHover}
                                stripedRows={this.state.stripedRows}
                                >
                                    {this.props.league.map( (row, index) => (
                                        <TableRow key={index} selected={row.selected}>
                                            <TableRowColumn>{row.position}</TableRowColumn>
                                            <TableRowColumn>{row.teamName}</TableRowColumn>
                                            <TableRowColumn>{row.points}</TableRowColumn>
                                            <TableRowColumn>{row.playedGames}</TableRowColumn>
                                            <TableRowColumn>{row.wins}</TableRowColumn>
                                            <TableRowColumn>{row.draws}</TableRowColumn>
                                            <TableRowColumn>{row.losses}</TableRowColumn>
                                        </TableRow>
                                    ))}
                                </TableBody>

                            </Table>
                        </div>
                    );
                };
                _onCellClick(rowNumber, columnNumber, evt) {
                    console.log("Team: ", this.props.league[rowNumber].teamName, "saved");
                    this.props.getTeamName(this.props.league[rowNumber].teamName, this.props.league[rowNumber]._links.team.href);
                };
            };

            export default Game
