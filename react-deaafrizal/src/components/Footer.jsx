/* eslint-disable react/prop-types */
import React from "react";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Footer Bang</h1>
        <p>{this.props.paragraph()}</p>
      </div>
    );
  }
}

export default Footer;
