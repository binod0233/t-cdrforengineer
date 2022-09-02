import React from "react";
import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";

const WhyCDR = ({ data }) => {
  const { whycdr, whyData } = data;
  return (
    <Container>
      <PurpleHeading title={whycdr?.title} />
      <TextParagraph
        family="Arial"
        content={whycdr?.paragraph && parse(whycdr.paragraph)}
      />
      <div
        className="d-flex justify-content-between mb-5"
        style={{ flexWrap: "wrap" }}
      >
        {whyData &&
          whyData.map((t, i) => (
            <div
              key={t.id}
              style={{ width: "270px" }}
              className="p-2   whyCDRCardBottom"
            >
              <div className="p-4 WhyCDRCard">
                <div className="h-50 d-flex justify-content-center align-items-center mb-4 bg-white">
                  <img
                    src={t?.image?.data?.attributes?.url}
                    style={{ height: "150px", objectFit: "contain" }}
                    alt="robot"
                  />
                </div>
                <div className="CDRRow">
                  <p
                    style={{
                      fontFamily: "Century Gothic",
                      textAlign: "center",
                    }}
                  >
                    {t?.paragraph && parse(t.paragraph)}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </Container>
  );
};

export default WhyCDR;
