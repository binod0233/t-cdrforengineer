import React from "react";
import { Container } from "react-bootstrap";
import FancyTabs from "../FancyTabs";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";

const HowReview = ({ data }) => {
  const { how, proofData } = data;
  return (
    <div style={{ background: "#F1F1F1" }}>
      <Container className="pb-5">
        <PurpleHeading title={how?.title} />
        <TextParagraph
          family="Arial"
          content={how?.paragraph && parse(how.paragraph)}
        />
        <FancyTabs fancyData={proofData} />
        {/* <TextParagraph
          family="Arial"
          content="Our Top Experts writers of CDR For Engineer known for Best CDR Report writing and Reviewing service in Australia always focus on checking the technical aspects of CDR Report to make you high-quality CDR report"
        />
        <TextParagraph
          family="Arial"
          content="CDR For Engineer  follows  these  smart  ways for the CDR  reviewing process. Whether want a high-quality CDR report or CDR report review service before submit tingit to the EA then contact us."
        /> */}
      </Container>
    </div>
  );
};

export default HowReview;
