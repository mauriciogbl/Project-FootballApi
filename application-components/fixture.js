import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class Fixture extends React.Component {
    constructor(props) {
        super(props);
        this.state={
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
        }
    };
    render() {
        console.log(this.props.fixture)
        return (
            <div >
                <Table
                    height={this.state.height}
                    fixedHeader={this.state.fixedHeader}
                    fixedFooter={this.state.fixedFooter}
                    selectable={this.state.selectable}
                    multiSelectable={this.state.multiSelectable}
                    >
                        <TableHeader
                            displaySelectAll={this.state.showCheckboxes}
                            adjustForCheckbox={this.state.showCheckboxes}
                            enableSelectAll={this.state.enableSelectAll}
                            >
                                <TableRow>
                                    <TableHeaderColumn colSpan="7">
                                        <h1  className="fixture__title">Fixture</h1>
                                    </TableHeaderColumn>
                                </TableRow>
                                <TableRow>
                                    <TableHeaderColumn tooltip="Away Team Name">Away Team Name</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="Date">Date</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="Home Team Namer">Home Team Namer</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="MatchDay">MatchDay</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="Away Team Goals">Away Team Goals</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="Home Team Goals">Home Team Goals</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="Status">Status</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody
                                displayRowCheckbox={this.state.showCheckboxes}
                                deselectOnClickaway={this.state.deselectOnClickaway}
                                showRowHover={this.state.showRowHover}
                                stripedRows={this.state.stripedRows}
                                >
                                    {this.props.fixture.fixtures.map( (row, index) => (
                                        <TableRow key={index} selected={row.selected}>
                                            <TableRowColumn>{row.awayTeamName}</TableRowColumn>
                                            <TableRowColumn>{row.date}</TableRowColumn>
                                            <TableRowColumn>{row.homeTeamName}</TableRowColumn>
                                            <TableRowColumn>{row.matchday}</TableRowColumn>
                                            <TableRowColumn>{row.result.goalsAwayTeam}</TableRowColumn>
                                            <TableRowColumn>{row.result.goalsHomeTeam}</TableRowColumn>
                                            <TableRowColumn>{row.status}</TableRowColumn>
                                        </TableRow>
                                    ))}
                                </TableBody>

                            </Table>
                        </div>
                    );
                };
            }
            export default Fixture
