import React from "react";
import DetailPresenter from "./DetailPresenter";

export default class extends React.Component {
  state = {
    result: null
  };

  render() {
    const { result } = this.state;
    return <DetailPresenter result={result} />;
  }
}