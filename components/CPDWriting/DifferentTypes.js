import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import parse from "html-react-parser";

const DifferentTypes = ({ data }) => {
  const { what2, whatData } = data;

  return (
    <div style={{ background: "#F8FCFF" }}>
      <Container>
        <PurpleHeading title={what2[1]?.title} />
        <div
          className="documentsForStageList"
          style={{
            color: "#666666",
            fontSize: "20px",
            fontFamily: "Arial",
          }}
        >
          {what2[1]?.paragraph && parse(what2[1].paragraph)}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
          className="px-5 py-5"
        >
          <div style={{ width: "330px" }} className="px-4 py-5">
            <div className="cpdWritingCard p-2 my-3 my-md-0 CPDCard">
              <h5
                className="CPDCardHeading"
                style={{
                  textAlign: "center",
                  color: "#370B63",
                  fontFamily: "Century Gothic",
                  fontWeight: "600",
                }}
              >
                {whatData[0]?.title}
              </h5>
              <p
                className="documentsForStageList my-3 my-md-2"
                style={{
                  textAlign: "center",
                  fontFamily: "Century Gothic",
                }}
              >
                {whatData[0]?.paragraph && parse(whatData[0].paragraph)}{" "}
              </p>
            </div>
          </div>
          <div style={{ width: "330px" }} className="px-3 py-5">
            <div className="cpdWritingCard p-2 my-3 my-md-0 CPDCard">
              <h5
                style={{
                  textAlign: "center",
                  color: "#370B63",
                  fontFamily: "Century Gothic",
                  fontWeight: "600",
                }}
                className="CPDCardHeading"
              >
                {whatData[1]?.title}
              </h5>
              <p
                className="documentsForStageList my-3 my-md-2"
                style={{
                  textAlign: "center",
                  fontFamily: "Century Gothic",
                }}
              >
                {whatData[1]?.paragraph && parse(whatData[1].paragraph)}{" "}
              </p>
            </div>
          </div>
          <div style={{ width: "330px" }} className="px-3 py-5">
            <div className="cpdWritingCard p-2 my-3 my-md-0 CPDCard">
              <h5
                style={{
                  textAlign: "center",
                  color: "#370B63",
                  fontFamily: "Century Gothic",
                  fontWeight: "600",
                }}
                className="CPDCardHeading"
              >
                {whatData[2]?.title}
              </h5>
              <p
                className="documentsForStageList my-3 my-md-2"
                style={{
                  textAlign: "center",
                  fontFamily: "Century Gothic",
                }}
              >
                {whatData[2]?.paragraph && parse(whatData[2].paragraph)}{" "}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DifferentTypes;
