import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";

const EngineersTakeHelp = ({ data }) => {
  const { reports_title, steps, paragraph2 } = data;

  return (
    <Container className="py-4">
      <PurpleHeading title={reports_title} />
      <TextParagraph content={paragraph2 && parse(paragraph2)} />
      <Row>
        {steps.map((item, i) => (
          <Col md={3} xs={12} key={i} style={{ paddingRight: "5px" }}>
            <div style={{ background: "#E5E5E5" }}>
              <div
                style={{
                  height: "260px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={item.image?.data?.attributes?.url}
                  alt={item.image?.data?.attributes?.alternativeText}
                  style={{ height: "100%", objectFit: "contain" }}
                />
              </div>
              <div className="p-2" style={{ height: "250px" }}>
                <p
                  style={{
                    textAlign: "center",
                    margin: 0,
                    color: "#FA2545",
                    fontSize: "25px",
                    padding: "0",
                  }}
                >
                  <strong>{item?.title}</strong>
                </p>
                <br />
                {/* <p
                  style={{
                    textAlign: "center",
                    marginBottom: "0",
                    marginTop: "-10px",
                  }}
                >
                  <strong>{item.subTitle}</strong>
                </p> */}
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "15px",
                    fontFamily: "Arial",
                  }}
                >
                  {item?.paragraph && parse(item.paragraph)}{" "}
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default EngineersTakeHelp;
