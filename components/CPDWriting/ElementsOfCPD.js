import React from "react";
import { Container, Row } from "react-bootstrap";
import FancyTabs from "../FancyTabs";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";

const ElementsOfCPD = ({ data }) => {
  const { element, personalData } = data;
  return (
    <Container>
      <PurpleHeading title={element?.title} />
      <Row>
        <img src={element?.image?.data?.attributes?.url} alt="few tips" />
      </Row>
      <TextParagraph
        family="Arial"
        content={element?.paragraph && parse(element.paragraph)}
      />

      <div style={{ background: "#F1F1F1", padding: "4%" }}>
        <FancyTabs fancyData={personalData} />
        {/* <p
          style={{
            fontFamily: "Arial",
            fontSize: "19px",
            fontStyle: "normal",
            fontWeight: "400",
          }}
        >
          Obligations to the community in CPD Statement Writing should be in the
          correct CPD Writing format. High-quality CPD Report Writing will be
          assessed based on how well the students or engineers Applicants carry
          the activities or are willing to undergo risk for sustainable
          solutions.
        </p> */}
      </div>
    </Container>
  );
};

export default ElementsOfCPD;
