import React from 'react';

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
                onCellClick={this._onCellClick.bind(this)}
              >
                <TableHeader
                  displaySelectAll={this.state.showCheckboxes}
                  adjustForCheckbox={this.state.showCheckboxes}
                  enableSelectAll={this.state.enableSelectAll}
                >
                      <TableRow>
                        <TableHeaderColumn colSpan="7" tooltip="Current Season" style={{textAlign: 'center'}}>
                          Premier League - Season 2015/2016
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
                  {this.props.players.map( (row, index) => (
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
