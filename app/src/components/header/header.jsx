import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import "./header.css";

class Header extends React.Component {
  constructor() {
    super();
  }

  renderMainHeader() {
    return (
      <Row id="header" noGutters={true}>
        <Col>
          <ButtonToolbar className="dash-buttons">
          </ButtonToolbar>
        </Col>
        <Col>
        </Col>
      </Row>
    );
  }

  renderWelcomeHeader() {
    return <Row id="header" noGutters={true}></Row>;
  }

  render() {
    if (this.props.welcome) {
      return this.renderWelcomeHeader();
    } else {
      return this.renderMainHeader();
    }
  }
}

export default Header;
