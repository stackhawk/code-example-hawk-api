import React, { Component } from "react";
import { HawkTable } from "./HawkTable";
import { HawkDetails } from "./HawkDetails";

export interface Hawk {
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
}

type HawkReferenceProps = {};

type HawkReferenceState = {
  displayDetails: Boolean;
  hawkDetails: Hawk;
  hawks: Hawk[];
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
      hawkDetails: {} as Hawk,
      hawks: []
    };
  }

  componentDidMount() {
    this.fetchList();
  }

  fetchList = () => {
    fetch("/list")
      .then(response => response.json())
      .then(data => {
        const hawks = data.hawks;
        this.setState({ hawks });
      });
  };

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

  saveHawk = () => {
    const hawk = Object.assign({}, this.state.hawkDetails, { id: Date.now() });
    fetch("/api/hawk", {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(hawk as any)
    })
      .then(res => res.json())
      .then(json => {
        this.fetchList();
      });
  };

  handleChange = (value: string, property: string) => {
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
          hawks={this.state.hawks}
          displayDetails={this.state.displayDetails}
        ></HawkTable>
        {this.state.displayDetails && (
          <HawkDetails
            hawkId={this.state.hawkDetails.id}
            displayDetails={this.state.displayDetails}
            hawkDetails={this.state.hawkDetails}
            handleChange={this.handleChange}
            saveHawk={this.saveHawk}
          ></HawkDetails>
        )}
      </div>
    );
  }
}
