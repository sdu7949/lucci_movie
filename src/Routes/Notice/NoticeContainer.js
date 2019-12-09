import React from "react";
import NoticePresenter from "./NoticePresenter";

export default class extends React.Component {
  state = {
    result: null
  };

  render() {
    const { result } = this.state;
    return <NoticePresenter result={result} />;
  }
}