import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";

const CompetencyAssessment = ({ data }) => {
  const { stage2, content3 } = data;
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
        }}
      >
        {stage2?.title}
      </h2>
      <Row className="py-4">
        <img
          src={stage2?.image?.data?.attributes?.url}
          alt="Stage 2 Competency Assessment for Engineers Australia"
        />
      </Row>
      <Row>
        <PurpleHeading title={content3[0]?.title} />
        <TextParagraph
          family="Arial"
          content={content3[0]?.paragraph && parse(content3[0].paragraph)}
        />

        <PurpleHeading title={content3[1]?.title} />
        <TextParagraph
          family="Arial"
          content={content3[1]?.paragraph && parse(content3[1].paragraph)}
        />
      </Row>
    </Container>
  );
};

export default CompetencyAssessment;
