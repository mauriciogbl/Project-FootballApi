import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

class Template extends React.Component {
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
                                      <h1  className="template__title">Template</h1>
                                    </TableHeaderColumn>
                                </TableRow>
                                <TableRow>
                                    <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="The Position">Position</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="The Jersey Number">Jersey Number</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="Date of Birth">Date of Birth</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="The Nationality">Nationality</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="Contract Until">Contract Until</TableHeaderColumn>
                                    <TableHeaderColumn tooltip="The Market Value">Market Value</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody
                                displayRowCheckbox={this.state.showCheckboxes}
                                deselectOnClickaway={this.state.deselectOnClickaway}
                                showRowHover={this.state.showRowHover}
                                stripedRows={this.state.stripedRows}
                                >
                                    {this.props.players.players.map( (row, index) => (
                                        <TableRow key={index} selected={row.selected}>
                                            <TableRowColumn>{row.name}</TableRowColumn>
                                            <TableRowColumn>{row.position}</TableRowColumn>
                                            <TableRowColumn>{row.jerseyNumber}</TableRowColumn>
                                            <TableRowColumn>{row.dateOfBirth}</TableRowColumn>
                                            <TableRowColumn>{row.nationality}</TableRowColumn>
                                            <TableRowColumn>{row.contractUntil}</TableRowColumn>
                                            <TableRowColumn>{row.marketValue}</TableRowColumn>
                                        </TableRow>
                                    ))}
                                </TableBody>

                            </Table>
                        </div>
                    );
                };
            }
            export default Template
