import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";

const RelyOn = ({ data }) => {
  const { stage, content } = data;
  return (
    <Container>
      <h2
        className="stage1Heading"
        style={{
          fontSize: "34px",
          fontFamily: "Cambria",
          color: "#370C64",
          fontWeight: "700",
          marginTop: "50px",
          padding: "0 100px",
        }}
      >
        {stage?.title}
      </h2>
      <Row className="py-4 ">
        <img
          src={stage?.image?.data?.attributes?.url}
          alt="Stage 1 Competency Assessment service provider for Engineers Australia"
        />
      </Row>
      <Row>
        <PurpleHeading title={content[0]?.title} />
        <TextParagraph
          family="Arial"
          content={content[0]?.paragraph && parse(content[0].paragraph)}
        />

        <PurpleHeading title={content[1]?.title} />
        <TextParagraph
          family="Arial"
          content={content[1]?.paragraph && parse(content[1].paragraph)}
        />
      </Row>
      <Row className="d-flex justify-content-center align-items-center my-4">
        <div
          style={{
            width: "fit-content",
            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
            display: "flex",
            borderRadius: "8px",
            padding: "0 5px",
          }}
        >
          <div
            className="relyOnCard"
            style={{
              background: "#5813A0",
              boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
              color: "white",
              padding: "10px 5px",
            }}
          >
            <strong> Competency No. 1:</strong>
          </div>
          <div
            style={{
              borderRadius: "5px",
              color: "black",
              padding: "10px 5px",
              width: "280px",
              paddingLeft: "10px",
            }}
          >
            <strong>Knowledge and skill base</strong>
          </div>
        </div>
      </Row>
      <Row className="d-flex justify-content-around align-items-center my-5">
        <div
          className="relyOnCard"
          style={{
            width: "fit-content",
            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
            display: "flex",
            borderRadius: "8px",
            padding: "0 5px",
          }}
        >
          <div
            style={{
              background: "#5813A0",
              boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
              color: "white",
              padding: "10px 5px",
            }}
          >
            <strong> Competency No 2:</strong>
          </div>
          <div
            style={{
              borderRadius: "5px",
              color: "black",
              padding: "10px 5px",
              width: "280px",
              paddingLeft: "10px",
            }}
          >
            <strong>Engineering Capability</strong>
          </div>
        </div>
        <div
          className="relyOnCard mt-5 mt-md-0"
          style={{
            width: "fit-content",
            boxShadow: "4px 4px 4px rgba(0, 0, 0, 0.25)",
            display: "flex",
            borderRadius: "8px",
            padding: "0 5px",
          }}
        >
          <div
            style={{
              background: "#5813A0",
              boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.25)",
              borderRadius: "5px",
              color: "white",
              padding: "10px 5px",
            }}
          >
            <strong>Competency No 3:</strong>
          </div>
          <div
            style={{
              borderRadius: "5px",
              color: "black",
              padding: "10px 5px",
              width: "280px",
              paddingLeft: "10px",
            }}
          >
            <strong> Professional and Personal Ability</strong>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default RelyOn;
