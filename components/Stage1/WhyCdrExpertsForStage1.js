import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";

const WhyCdrExpertsForStage1 = ({ data }) => {
  return (
    <Container>
      <PurpleHeading title={data?.title} />
      <Row>
        <Col md={8}>
          <TextParagraph
            family="Arial"
            content={data?.paragraph && parse(data.paragraph)}
          />
        </Col>
        <Col
          md={4}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            src={data?.image?.data?.attributes?.url}
            alt="number one Service provider in Australia for CDR Report Writing"
            className="img-fluid"
            style={{ height: "350px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default WhyCdrExpertsForStage1;
