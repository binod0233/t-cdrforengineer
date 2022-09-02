import React from "react";
import { Container, Row } from "react-bootstrap";
import FancyTabs from "../FancyTabs";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";

const ImportantElement = ({ data }) => {
  const { element, skillsData } = data;
  return (
    <div style={{ background: "#F1F1F1" }}>
      <PurpleHeading title={element?.title} />
      <Container>
        <Row>
          <img
            src={element?.image?.data?.attributes?.url}
            alt="important element"
          />
        </Row>
        <TextParagraph
          family="Arial"
          content={element?.paragraph && parse(element.paragraph)}
        />
        <Row>
          <FancyTabs fancyData={skillsData} />
        </Row>
      </Container>
    </div>
  );
};

export default ImportantElement;
