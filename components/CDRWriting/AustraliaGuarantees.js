import { Row, Col, Container } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import parse from "html-react-parser";
const AustraliaGuarantees = ({ data }) => {
  const { guaranteed, guaranteedData } = data;
  return (
    <div>
      <PurpleHeading title={guaranteed?.title} />
      <div className="px-md-5 px-2">
        <p
          className="px-md-5 py-4 australiaGuaranteesParagraphs"
          style={{ fontFamily: "Arial", fontSize: "18px", color: "#666666" }}
        >
          {guaranteed?.paragraph && parse(guaranteed?.paragraph)}
        </p>
      </div>
      <Container>
        {guaranteedData.map((item, index) => (
          <>
            {index % 2 === 0 ? (
              <Row>
                <Col
                  xs={6}
                  md={6}
                  className="px-md-5 d-flex justify-content-center"
                >
                  <div className="px-md-4 mb-5 australiaGuaranteesImageContainer">
                    <img
                      src={item?.image?.data?.attributes?.url}
                      alt={item?.image?.data?.attributes?.alternativeText}
                      style={{ marginLeft: "5vw", objectFit: "contain" }}
                      className="australiaGuaranteesImage"
                    />
                  </div>
                </Col>
                <Col xs={6} md={6}>
                  <h4
                    className="australiaGuaranteesHeadings"
                    style={{
                      color: "#000000",
                      fontWeight: "700",
                      marginTop: "100px",
                    }}
                  >
                    {item?.title}
                  </h4>
                  <div
                    className="australiaGuaranteesParagraphs"
                    style={{
                      fontFamily: "Arial",
                      fontWeight: "400",
                      fontSize: "18px",
                      color: "#666666",
                      marginLeft: "30px",
                      paddingRight: "30px",
                    }}
                  >
                    {item?.paragraph && parse(item.paragraph)}
                  </div>
                </Col>
              </Row>
            ) : (
              <Row>
                <Col xs={6} md={6}>
                  <h4
                    className="australiaGuaranteesHeadings"
                    style={{
                      color: "#000000",
                      fontWeight: "700",
                      marginTop: "30px",
                    }}
                  >
                    {item?.title}
                  </h4>
                  <div
                    className="australiaGuaranteesParagraphs"
                    style={{
                      fontFamily: "Arial",
                      fontWeight: "400",
                      fontSize: "18px",
                      color: "#666666",
                      marginLeft: "30px",
                      paddingRight: "30px",
                    }}
                  >
                    {item?.paragraph && parse(item.paragraph)}
                  </div>
                </Col>

                <Col
                  xs={6}
                  md={6}
                  className="px-md-5 d-flex justify-content-center"
                >
                  <div className="px-md-4 mb-5 australiaGuaranteesImageContainer">
                    <img
                      src={item?.image?.data?.attributes?.url}
                      alt={item?.image?.data?.attributes?.alternativeText}
                      style={{ objectFit: "contain" }}
                      className="australiaGuaranteesImage"
                    />
                  </div>
                </Col>
              </Row>
            )}
          </>
        ))}
      </Container>
    </div>
  );
};

export default AustraliaGuarantees;
