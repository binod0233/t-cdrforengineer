import { Container, Row, Col } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import parse from "html-react-parser";
const FeaturesOfCPD = ({ data }) => {
  const { what2 } = data;
  return (
    <Container>
      <PurpleHeading title={what2[0]?.title} />
      <div
        className="documentsForStageList"
        style={{
          color: "#666666",
          fontSize: "20dix",
          fontFamily: "Arial",
        }}
      >
        {what2[0]?.paragraph && parse(what2[0].paragraph)}
      </div>
      {/* <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
        className="px-5 py-3"
      >
        <div style={{ width: "50%" }} className="px-md-5">
          <p
            className="px-md-5 documentsForStageList"
            style={{
              color: "#666666",
              fontSize: "20px",
              fontFamily: "Arial",
            }}
          >
            It should Identify your needs. <br />
            It should reflect your learning.
          </p>
        </div>
        <div style={{ width: "50%" }}>
          <p
            className="px-md-5 documentsForStageList"
            style={{
              color: "#666666",
              fontSize: "20px",
              fontFamily: "Arial",
            }}
          >
            It should plan and carry out development activities.
            <br />
            It should Apply all your learning.
          </p>
        </div>
      </div> */}
    </Container>
  );
};

export default FeaturesOfCPD;
