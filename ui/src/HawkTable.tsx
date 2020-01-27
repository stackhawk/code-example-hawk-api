import React, { Component } from "react";
import Table from "./Table";
import { Hawk } from "./HawkReference";

type HawkTableState = {};

type HawkTableProps = {
  toggleDetails: Function;
  addHawk: Function;
  hawks: Hawk[];
  displayDetails: Boolean;
};

export class HawkTable extends Component<HawkTableProps, HawkTableState> {
  constructor(props: HawkTableProps) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="hawk-table">
        {!this.props.displayDetails ? (
          <button className="add-button" onClick={() => this.props.addHawk()}>
            <span aria-hidden="true">+</span>
            <p>Add Hawk</p>
          </button>
        ) : (
          <button
            className="add-button"
            onClick={() => this.props.toggleDetails()}
          >
            <span aria-hidden="true">X</span>
            <p>Close Details</p>
          </button>
        )}

        <div className="filter-input">
          <input type="text" name="filter" aria-label="filter" />
          <button>filter</button>
        </div>
        <button className="filter-button name-filter">Name</button>
        <button className="filter-button size-filter">Size</button>
        <button className="filter-button gender-filter">Gender</button>
        <Table
          hawks={this.props.hawks}
          toggleDetails={this.props.toggleDetails}
        ></Table>
      </div>
    );
  }
}
