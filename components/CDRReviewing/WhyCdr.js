import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import AddTaskRoundedIcon from "@mui/icons-material/AddTaskRounded";
import parse from "html-react-parser";
const WhyCdr = ({ data }) => {
  const contentData = [
    `Cdrdorengineer is known as Top CDR Reviewing Agency in Australia for CDR Reviewing for EA where we have professional writers who write and 
    review your CDR report to avoid different kinds of mistakes of your CDR report.
    `,
    `We can help students or Engineers Applicants to write and review CDR based on their academic project and training if in case they do not 
    have any  prior working experience.
    `,
    `We know all the guidelines and requirements of Engineers Applicants so we are result-oriented and known for Best CDR Reviewing consultant 
    in Australia.
    `,
    `We provide you with a 100 % Original CDR Report with no plagiarism error because we always say “No” to plagiarism Error.
    `,
    `We are result-oriented and we have an excellent Approval rate. We have already helped 1000+ students or Engineer Applicants to get their 
    positive results at an affordable price.
    `,
    `We provide you with a timely delivery advantage because we care about your time and money. Along with that, we have customer support 
    available 24/7.
    `,
  ];
  const { why, whyData, reason } = data;
  return (
    <Container>
      <PurpleHeading title={why?.title} />
      <TextParagraph
        family="Arial"
        content={why?.paragraph && parse(why.paragraph)}
      />

      <div style={{ display: "flex", flexDirection: "column" }}>
        {whyData.map((c, i) => (
          <div key={i} style={{ display: "flex" }}>
            <div style={{ flex: "0.1" }}>
              {" "}
              <div
                style={{
                  height: "40px",
                  width: "40px",
                  marginLeft: "auto",
                  borderRadius: "50%",
                }}
              >
                <AddTaskRoundedIcon style={{ color: "#FA2545" }} />
              </div>
            </div>
            <div style={{ flex: "0.9" }}>
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
            </div>
          </div>
        ))}
      </div>

      <PurpleHeading title={reason?.title} />
      <TextParagraph
        family="Arial"
        content={reason?.paragraph && parse(reason.paragraph)}
      />
    </Container>
  );
};

export default WhyCdr;
