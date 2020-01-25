import React, { Component } from "react";

type HawkDetailsProps = {
  displayDetails: Boolean;
};

type HawkDetailsState = {};

export class HawkDetails extends Component<HawkDetailsProps, HawkDetailsState> {
  constructor(props: HawkDetailsProps) {
    super(props);

    this.state = {
      displayDetails: false
    };
  }
  render() {
    return (
      <div
        className={
          this.props.displayDetails ? "hawk-details" : "hawk-details-hide"
        }
      ></div>
    );
  }
}
