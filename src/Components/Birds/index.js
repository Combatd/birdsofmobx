import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("BirdStore")
@observer
class Birds extends Component {
  render() {
    // access our store via the props
    const { BirdStore } = this.props;

    return <div>Birds</div>;
  }
}

export default Birds;