import React from "react";
import MotherBoard from "./motherBoard";

class MainComponents extends React.Component {
  render() {
    return (
      <div>
        <h4>Main Components</h4>
        <div className="mb-image w-3/6">
          <MotherBoard />
        </div>
      </div>
    );
  }
}

export default MainComponents;
