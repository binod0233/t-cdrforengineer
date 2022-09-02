import React from "react";
import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";

const ResumeWriting = ({ data }) => {
  const { cv, why } = data;
  return (
    <Container>
      <PurpleHeading title={cv?.title} />
      <TextParagraph
        family="Arial"
        content={cv?.paragraph && parse(cv.paragraph)}
      />
      <Row>
        <img
          src={cv?.image?.data?.attributes?.url}
          alt={cv?.image?.data?.attributes?.alternativeText}
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

export default ResumeWriting;
