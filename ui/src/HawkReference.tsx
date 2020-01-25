import React, { Component } from "react";
import { HawkTable } from "./HawkTable";
import { HawkDetails } from "./HawkDetails";
import { Hawk } from "./HawkTable";

// export type Hawk = {
//   behaviorDescription: string;
//   colorDescription: string;
//   gender: string;
//   habitatDescription: string;
//   name: string;
//   pictureUrl: string;
//   size: string;
//   id: number;
//   lengthBegin: number;
//   lengthEnd: number;
//   weightBegin: number;
//   weightEnd: number;
//   wingspanBegin: number;
//   wingspanEnd: number;
// };

type HawkReferenceProps = {};

type HawkReferenceState = {
  displayDetails: Boolean;
  hawkDetails: Hawk | null;
};

export class HawkReference extends Component<
  HawkReferenceProps,
  HawkReferenceState
> {
  constructor(props: HawkReferenceProps) {
    super(props);

    this.state = {
      displayDetails: false,
      hawkDetails: null
    };
  }

  toggleDetails = () => {
    console.log(12);
    this.setState({ displayDetails: !this.state.displayDetails });
  };

  render() {
    return (
      <div className="hawk-reference">
        <HawkTable toggleDetails={this.toggleDetails}></HawkTable>
        <HawkDetails displayDetails={this.state.displayDetails}></HawkDetails>
      </div>
    );
  }
}
