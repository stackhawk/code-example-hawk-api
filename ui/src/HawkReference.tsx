import React, { Component } from "react";
import { HawkTable } from "./HawkTable";
import { HawkDetails } from "./HawkDetails";
import { Hawk } from "./HawkTable";

type HawkReferenceProps = {};

type HawkReferenceState = {
  displayDetails: Boolean;
  hawkDetails: Hawk;
};

export class HawkReference extends Component<
  HawkReferenceProps,
  HawkReferenceState
> {
  constructor(props: HawkReferenceProps) {
    super(props);

    this.state = {
      displayDetails: false,
      hawkDetails: {} as Hawk
    };
  }

  toggleDetails = (hawk: Hawk) => {
    this.setState({
      displayDetails: !this.state.displayDetails,
      hawkDetails: hawk
    });
  };

  render() {
    return (
      <div className="hawk-reference">
        <HawkTable toggleDetails={this.toggleDetails}></HawkTable>
        <HawkDetails
          displayDetails={this.state.displayDetails}
          hawkDetails={this.state.hawkDetails}
        ></HawkDetails>
      </div>
    );
  }
}
