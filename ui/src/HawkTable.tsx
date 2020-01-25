import React, { Component } from "react";

type HawkTableState = {};

export class HawkTable extends Component<{}, HawkTableState> {
  componentDidMount() {}

  render() {
    return (
      <div className="hawk-table">
        <button className="add-button">+ Add Hawk</button>
        <div className="filter-input">
          <input type="text" name="filter" aria-label="filter" />
          <button>filter</button>
        </div>
        <button className="filter-button name-filter">Name</button>
        <button className="filter-button size-filter">Size</button>
        <button className="filter-button gender-filter">Gender</button>
        <div className="table">
          <ul>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </ul>
        </div>
      </div>
    );
  }
}
