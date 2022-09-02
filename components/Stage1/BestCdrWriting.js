import React from "react";
import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";

const BestCdrWriting = ({ data }) => {
  return (
    <Container>
      <PurpleHeading title={data?.title} />
      <TextParagraph
        family="Arial"
        content={data?.paragraph && parse(data.paragraph)}
      />
    </Container>
  );
};

export default BestCdrWriting;
