import React from "react";
import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";

const ReviewingServices = ({ data }) => {
  return (
    <Container>
      <PurpleHeading title={data?.title} />
      <TextParagraph
        family="Arial"
        content={data?.paragraph && parse(data.paragraph)}
      />
      <Row>
        <img
          src={data?.image?.data?.attributes?.url}
          alt={data?.image?.data?.attributes?.alternativeText}
        />
      </Row>
    </Container>
  );
};

export default ReviewingServices;
