import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";

const Stage2Standards = ({ data }) => {
  const contentData = [
    "Understand all the requirements of the consumers, stakeholders, and society as whole",
    "Dedication and determination to expand all three aspects like economic, social, and environmental aspects",
    "Tackle with other professions from diverse backgrounds",
    "Show that the engineering input is fully helpful in the overall project or program",
    "Utilizing technical possibilities for culture, industry, and government",
    "Managing and finding a way to mitigate risk and maintain sustainable viability",
    "Identifying how emerging technologies apply to old ones",
    "Ensuring all the prices, limits, risks, are fully known about the results",
  ];
  const { competencyData, content3 } = data;
  return (
    <Container>
      <PurpleHeading title={content3[3]?.title} />
      <TextParagraph
        family="Arial"
        content={content3[3]?.paragraph && parse(content3[3].paragraph)}
      />
      <Row>
        {competencyData.map((c, i) => (
          <div key={c.id}>
            <Col xs={1} md={1}>
              <div
                style={{
                  height: "40px",
                  width: "40px",
                  marginLeft: "auto",
                  borderRadius: "50%",
                }}
              >
                <img
                  src="/images/exp-small.png"
                  alt=""
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </Col>
            <Col xs={11} md={11}>
              <p
                className="documentsForStageList"
                style={{
                  color: "#666666",
                  fontSize: "18px",
                  fontFamily: "Arial",
                }}
              >
                {c?.paragraph && parse(c.paragraph)}
              </p>
            </Col>
          </div>
        ))}
      </Row>
      <TextParagraph
        content="We CDR For Engineer, assure you to guide you through the whole process so your Assessment can   go   on   smoothly   without   any hindrance. We have   our   Top professional  Stage  2  Competency  Assessment  Expert  writers in  preparing such reports"
        family="Arial"
      />
    </Container>
  );
};

export default Stage2Standards;
