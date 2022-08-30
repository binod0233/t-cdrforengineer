import React from "react";
import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";

const WhatIsSummary = ({ data }) => {
  const { what, summary } = data;
  return (
    <Container>
      <PurpleHeading title={summary?.title} />
      <TextParagraph
        family="Arial"
        content={summary?.paragraph && parse(summary.paragraph)}
      />
      <Row>
        <img
          src={summary?.image?.data?.attributes?.url}
          alt="summary statement"
        />
      </Row>

      <PurpleHeading title={what?.title} />
      <TextParagraph
        family="Arial"
        content={what?.paragraph && parse(what.paragraph)}
      />
    </Container>
  );
};

export default WhatIsSummary;
