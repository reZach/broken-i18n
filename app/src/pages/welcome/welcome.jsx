import React from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import ROUTES from "Constants/routes";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Layout from "Pages/layout/layout";
import Header from "Components/header/header";
import "./welcome.css";

class Welcome extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <Layout>
        <Header welcome={true}></Header>
        <Container>
          <Jumbotron>
            <h1>{t("Mytranslation")}</h1>
            <p>copy.</p>
          </Jumbotron>
        </Container>
      </Layout>
    );
  }
}

export default withTranslation()(Welcome);
