import { Component, memo } from "react";

export class HeaderClassComponent extends Component {
  render() {
    return (
      <div>Header</div>
    )
  }
}

export default memo(HeaderClassComponent);