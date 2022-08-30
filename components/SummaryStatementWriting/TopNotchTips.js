import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";

const TopNotchTips = ({ data }) => {
  const { tips, tipsData } = data;
  return (
    <>
      {" "}
      <PurpleHeading title={tips?.title} />
      <Container className="px-md-5 mt-5">
        <Row className="px-5">
          <TextParagraph
            content={tips?.paragraph && parse(tips.paragraph)}
            familiy="Arial"
          />
        </Row>
        {tipsData &&
          tipsData.map((c, index) => (
            <Row className="px-md-5" key={c.id}>
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
                <TextParagraph
                  content={c?.paragraph && parse(c.paragraph)}
                  familiy="Arial"
                />
              </Col>
            </Row>
          ))}
      </Container>
    </>
  );
};

export default TopNotchTips;
