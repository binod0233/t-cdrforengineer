import { Container, Row } from "react-bootstrap";
import FancyTabs from "../FancyTabs";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";

const HighQualityCareer = ({ data }) => {
  const { careerEpisode, introData } = data;
  return (
    <div style={{ background: "#F1F1F1" }}>
      <Container>
        <PurpleHeading title={careerEpisode?.title} />
        <TextParagraph
          family="Arial"
          content={careerEpisode?.paragraph && parse(careerEpisode.paragraph)}
        />
        <Row>
          <img
            src={careerEpisode?.image?.data?.attributes?.url}
            alt="writing format"
          />
        </Row>
        <Row>
          <FancyTabs fancyData={introData} />
        </Row>
      </Container>
    </div>
  );
};

export default HighQualityCareer;
