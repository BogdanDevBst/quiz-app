import React from "react";
// import styles from "./Popup.module.scss";

class Popup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: "Start",
      title: "Welcome to 2020 quiz",
      text:
        "This is a quiz app made with ReactJS. Any questions can be added to this quiz DB.",
      buttoText: "Start the quiz",
    };
  }
}

export default Popup;
