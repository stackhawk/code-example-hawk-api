import React, { Component } from "react";
import { HawkTable } from "./HawkTable";
import { HawkDetails } from "./HawkDetails";
import { Hawk } from "./HawkTable";

type HawkReferenceProps = {};

type HawkReferenceState = {
  displayDetails: Boolean;
  hawkDetails: Hawk;
};

interface IIndexable {
  [key: string]: any;
}

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

  addHawk = () => {
    this.setState({
      displayDetails: true,
      hawkDetails: {} as Hawk
    });
  };

  handleChange = (value: string, property: string) => {
    type propertyA = keyof Hawk;
    const hawkDetails = { ...this.state.hawkDetails };
    (hawkDetails as IIndexable)[property] = value;
    this.setState({ hawkDetails });
  };

  render() {
    return (
      <div className="hawk-reference">
        <HawkTable
          toggleDetails={this.toggleDetails}
          addHawk={this.addHawk}
        ></HawkTable>
        {this.state.displayDetails && (
          <HawkDetails
            hawkId={this.state.hawkDetails.id}
            displayDetails={this.state.displayDetails}
            hawkDetails={this.state.hawkDetails}
            handleChange={this.handleChange}
          ></HawkDetails>
        )}
      </div>
    );
  }
}
