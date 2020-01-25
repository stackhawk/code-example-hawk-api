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
      >
        <label htmlFor="name" className="name-label">
          Name
        </label>
        <input id="name" type="text" />
        <label htmlFor="size" className="size-label">
          Size
        </label>
        <select id="size">
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>
        <label htmlFor="gender" className="gender-label">
          Gender
        </label>
        <select id="gender">
          <option>Male</option>
          <option>Female</option>
        </select>
        <span className="length-label">Length</span>
        <label className="length-from">From</label>
        <input className="length-from-input" type="text" />
        <label className="length-to">To</label>
        <input className="length-to-input" type="text" />
        <span className="length-units">cm</span>
        <span className="wingspan-label">Wingspan</span>
        <label className="wingspan-from">From</label>
        <input className="wingspan-from-input" type="text" />
        <label className="wingspan-to">To</label>
        <input className="wingspan-to-input" type="text" />
        <span className="wingspan-units">cm</span>
        <span className="weight-label">Weight</span>
        <label className="weight-from">From</label>
        <input className="weight-from-input" type="text" />
        <label className="weight-to">To</label>
        <input className="weight-to-input" type="text" />
        <span className="weight-units">cm</span>
        <label className="url-input">
          Url
          <input type="text" />
        </label>
        <label className="color-description">
          Color description
          <textarea></textarea>
        </label>
        <label className="behavior-description">
          Behavior description
          <textarea></textarea>
        </label>
        <label className="habitat-description">
          Habitat description
          <textarea></textarea>
        </label>
        <button className="save-button">Save</button>
      </div>
    );
  }
}
