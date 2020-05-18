import React from "react";
// import styles from "./Footer.module.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <small>
          You can find the code repo on{" "}
          <a href="https://github.com/BogdanDevBst">Github</a>. Feel free to
          make any pull requests to improve the aplication.
        </small>
        <p>
          Built with <span>&hearts;</span> by{" "}
          <a href="https://bogdan-niculescu.co.uk/">Bogdan Niculescu</a>
        </p>
      </footer>
    );
  }
}

export default Footer;
