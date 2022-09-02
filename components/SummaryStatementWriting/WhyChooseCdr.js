import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";
const WhyChooseCdr = ({ data }) => {
  const cardItems = [
    {
      heading: `Have Trouble writing yourSummary statement report`,
      image: "/images/summary-report.jpg",
    },
    {
      heading: `Want your High-Quality 
    Summary Statement Report`,
      image: "/images/summary-written-report.jpg",
    },
    {
      heading: `Want a 100% Approval Rate from Engineer Applicants`,
      image: "/images/correct.jpg",
    },
    {
      heading: `Worry about High Quality 
    at Affordable fees `,
      image: "/images/affordablefees.jpg",
    },
  ];
  const { why, whyData } = data;
  return (
    <div className="px-md-5 px-3" style={{}}>
      <Row className="px-md-5">
        <PurpleHeading title={why?.title} />
        <TextParagraph
          content={why?.paragraph && parse(why.paragraph)}
          familiy="Arial"
        />
      </Row>
      <Row className="px-5 ">
        {whyData.map((c, i) => (
          <Col md={3} className="px-3" key={i}>
            <Card className="whyChooseCdrCard mb-5">
              <div
                className="text-white"
                style={{ background: "#5813A0", borderRadius: "15px" }}
              >
                <Row className="p-3">
                  <Col md={10}>
                    <strong>{c?.title}</strong>
                  </Col>
                  <Col
                    md={1}
                    style={{
                      fontSize: "35px",
                      fontWeight: "700",
                    }}
                  >
                    ?
                  </Col>
                </Row>
              </div>
              <Row className="d-flex justify-content-center align-items-center p-5">
                <img
                  src={c?.image?.data?.attributes?.url}
                  alt={c?.image?.data?.attributes?.alternativeText}
                  style={{ height: "200px", width: "200px" }}
                />
              </Row>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default WhyChooseCdr;
