import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";

import React from "react";
import parse from "html-react-parser";

const ContinuingServices = ({ data }) => {
  const { continung, want } = data;
  return (
    <Container>
      <PurpleHeading title={continung?.title} />
      <TextParagraph
        family="Arial"
        content={continung?.paragraph && parse(continung.paragraph)}
      />
      <Row>
        <img
          src={continung?.image?.data?.attributes?.url}
          alt="Continuing Professional Development"
        />
      </Row>

      <PurpleHeading title={want?.title} />
      <TextParagraph
        family="Arial"
        content={want?.paragraph && parse(want.paragraph)}
      />
    </Container>
  );
};

export default ContinuingServices;
