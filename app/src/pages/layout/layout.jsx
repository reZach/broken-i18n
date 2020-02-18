import React from "react";
import Container from "react-bootstrap/Container";
import "./layout.css";

class Layout extends React.Component {
  render() {
    const { children } = this.props;
    return <Container fluid={true} className="no-padding">{children}</Container>;
  }
}

export default Layout;
