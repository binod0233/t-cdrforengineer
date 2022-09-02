import React from "react";
import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import parse from "html-react-parser";

const ServicesForEngineers = ({ data }) => {
  const { report, what } = data;
  return (
    <Container>
      <PurpleHeading title={report?.title} />
      <div className="cdrWritingP">
        {report?.paragraph && parse(report.paragraph)}{" "}
      </div>
      <Row className="">
        <img
          src={report?.image?.data?.attributes?.url}
          alt="Competency Demonstration Report"
        />
      </Row>
      <PurpleHeading title={what?.title} />

      <div className="cdrWritingP" style={{ textAlign: "center" }}>
        {what?.paragraph && parse(what.paragraph)}{" "}
      </div>
    </Container>
  );
};

export default ServicesForEngineers;
