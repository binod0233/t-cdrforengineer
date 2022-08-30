import React from "react";
import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";

const PlagarismChecking = ({ data }) => {
  const { cdr, why } = data;
  return (
    <Container>
      <PurpleHeading title={cdr?.title} />
      <TextParagraph
        family="Arial"
        content={cdr?.paragraph && parse(cdr.paragraph)}
      />
      <Row>
        <img
          src={cdr?.image?.data?.attributes?.url}
          alt="Why CDR plagiarism checking and removal service is necessary?"
        />
      </Row>

      <PurpleHeading title={why?.title} />
      <TextParagraph
        family="Arial"
        content={why?.paragraph && parse(why.paragraph)}
      />
    </Container>
  );
};

export default PlagarismChecking;
