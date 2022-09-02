import { Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import parse from "html-react-parser";

const Advantages = ({ data }) => {
  const { benifitData } = data;

  return (
    <Container>
      <PurpleHeading title="Benefits of HiringProfessional Career Episode Writer:" />
      {/* <TextParagraph
        family="Cambria"
        content="Career Episode Report writing for Engineer Applicants is an important unit of CDR Report that provides detailed information on technical 
and other skills of all the Aspirants students who are planning to grab a better opportunity in Australia via migration skills assessment visa."
      /> */}
      {benifitData &&
        benifitData.map((item, index) => (
          <Row key={item.id}>
            <Col md={1}>
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
                  alt="Professional writers"
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "contain",
                  }}
                />
              </div>
            </Col>
            <Col md={11}>
              <TextParagraph
                family="Cambria"
                content={item?.paragraph && parse(item.paragraph)}
              />
            </Col>
          </Row>
        ))}
    </Container>
  );
};

export default Advantages;
