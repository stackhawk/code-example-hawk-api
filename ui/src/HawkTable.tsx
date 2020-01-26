import React, { Component } from "react";
import Table from "./Table";

export type Hawk = {
  behaviorDescription: string;
  colorDescription: string;
  gender: string;
  habitatDescription: string;
  name: string;
  pictureUrl: string;
  size: string;
  id: number;
  lengthBegin: number;
  lengthEnd: number;
  weightBegin: number;
  weightEnd: number;
  wingspanBegin: number;
  wingspanEnd: number;
};

type HawkTableState = {
  hawks: Hawk[];
};

type HawkTableProps = {
  toggleDetails: Function;
  addHawk: Function;
};

export class HawkTable extends Component<HawkTableProps, HawkTableState> {
  constructor(props: HawkTableProps) {
    super(props);

    this.state = {
      hawks: []
    };
  }

  componentDidMount() {
    fetch("/list")
      .then(response => response.json())
      .then(data => {
        const hawks = data.hawks;
        this.setState({ hawks });
      });
  }

  render() {
    return (
      <div className="hawk-table">
        <button className="add-button" onClick={() => this.props.addHawk()}>
          + Add Hawk
        </button>
        <div className="filter-input">
          <input type="text" name="filter" aria-label="filter" />
          <button>filter</button>
        </div>
        <button className="filter-button name-filter">Name</button>
        <button className="filter-button size-filter">Size</button>
        <button className="filter-button gender-filter">Gender</button>
        <Table
          hawks={this.state.hawks}
          toggleDetails={this.props.toggleDetails}
        ></Table>
      </div>
    );
  }
}
