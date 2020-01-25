import React, { Component } from "react";
import { Hawk } from "./HawkTable";

type HawkDetailsProps = {
  displayDetails: Boolean;
  hawkDetails: Hawk;
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
          this.props.displayDetails && this.props.hawkDetails
            ? "hawk-details"
            : "hawk-details-hide"
        }
      >
        <label htmlFor="name" className="name-label">
          Name
        </label>
        <input id="name" type="text" value={this.props.hawkDetails.name} />
        <label htmlFor="size" className="size-label">
          Size
        </label>
        <select id="size">
          <option selected={this.props.hawkDetails.name === "SMALL"}>
            Small
          </option>
          <option selected={this.props.hawkDetails.name === "MEDIUM"}>
            Medium
          </option>
          <option selected={this.props.hawkDetails.name === "LARAGE"}>
            Large
          </option>
        </select>
        <label htmlFor="gender" className="gender-label">
          Gender
        </label>
        <select id="gender">
          <option selected={this.props.hawkDetails.gender === "MALE"}>
            Male
          </option>
          <option selected={this.props.hawkDetails.gender === "FEMALE"}>
            Female
          </option>
        </select>
        <span className="length-label">Length</span>
        <label className="length-from">From</label>
        <input
          className="length-from-input"
          type="text"
          value={this.props.hawkDetails.lengthBegin}
        />
        <label className="length-to">To</label>
        <input
          className="length-to-input"
          type="text"
          value={this.props.hawkDetails.lengthEnd}
        />
        <span className="length-units">cm</span>
        <span className="wingspan-label">Wingspan</span>
        <label className="wingspan-from">From</label>
        <input
          className="wingspan-from-input"
          type="text"
          value={this.props.hawkDetails.wingspanBegin}
        />
        <label className="wingspan-to">To</label>
        <input
          className="wingspan-to-input"
          type="text"
          value={this.props.hawkDetails.wingspanEnd}
        />
        <span className="wingspan-units">cm</span>
        <span className="weight-label">Weight</span>
        <label className="weight-from">From</label>
        <input
          className="weight-from-input"
          type="text"
          value={this.props.hawkDetails.weightBegin}
        />
        <label className="weight-to">To</label>
        <input
          className="weight-to-input"
          type="text"
          value={this.props.hawkDetails.weightEnd}
        />
        <span className="weight-units">cm</span>
        <label className="url-input">
          Url
          <input type="text" value={this.props.hawkDetails.pictureUrl} />
        </label>
        <label className="color-description">
          Color description
          <textarea value={this.props.hawkDetails.colorDescription}></textarea>
        </label>
        <label className="behavior-description">
          Behavior description
          <textarea
            value={this.props.hawkDetails.behaviorDescription}
          ></textarea>
        </label>
        <label className="habitat-description">
          Habitat description
          <textarea
            value={this.props.hawkDetails.habitatDescription}
          ></textarea>
        </label>
        <button className="save-button">Save</button>
      </div>
    );
  }
}
