import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";

const EngineerStatus = ({ data }) => {
  return (
    <div style={{ background: "#F8FCFF" }}>
      <Container>
        <PurpleHeading title={data?.title} />
        <img
          src={data?.image?.data?.attributes?.url}
          alt={data?.image?.data?.attributes?.alternativeText}
        />

        <TextParagraph
          family="Arial"
          content={data?.paragraph && parse(data.paragraph)}
        />
      </Container>
    </div>
  );
};

export default EngineerStatus;
