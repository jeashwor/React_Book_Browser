import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">404 - Looking, but can't find it...</h1>
            <h1 className="text-center mt-5">
              <span role="img" aria-label="looking duck">
                <iframe title="duck gif" src="https://giphy.com/embed/12zV7u6Bh0vHpu" width={200} height={200} frameBorder={0} className="giphy-embed" allowFullScreen></iframe>
              </span>
            </h1>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
