import React from "react";
import { Container, Row } from "react-bootstrap";
import FancyTabs from "../FancyTabs";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";

const CDRWants = ({ data }) => {
  const { knowledgeData, cdr } = data;
  return (
    <div style={{ background: "#F1F1F1" }}>
      <Container>
        <PurpleHeading title={cdr?.title} />
        <TextParagraph
          family="Arial"
          content={cdr?.paragraph && parse(cdr.paragraph)}
        />

        <Row>
          <FancyTabs fancyData={knowledgeData} />
        </Row>
      </Container>
    </div>
  );
};

export default CDRWants;
