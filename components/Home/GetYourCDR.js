import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import TextParagraph from "../TextParagraph";
import Chatra from "@chatra/chatra";
import "../../styles/componentStyles.module.css";
import parse from "html-react-parser";
const GetYourCDR = ({ data }) => {
  const { approval, steps, content } = data;
  return (
    <Container className="my-5">
      <Row>
        <Col md={5} className="px-5">
          <PurpleHeading title={approval?.title} />
          <TextParagraph
            content={approval?.paragraph && parse(approval.paragraph)}
            family="Arial"
          />
          <Button
            className="formSubmitButton"
            variant="primary"
            type="submit"
            // onClick={() => Chatra("openChat", true)}
          >
            <div data-id="a454874ff4" className="livechat_button">
              <a href="https://www.livechat.com/?utm_source=chat_button&utm_medium=referral&utm_campaign=lc_14286585">
                Contact Us
              </a>
            </div>
            {/* Contact Us */}
          </Button>
        </Col>
        <Col md={7}>
          <div
            className="onTimeDelivery"
            style={{
              background: "#EAF0FC",
              height: "100px",
              width: "500px",
              marginTop: "60px",
              borderRadius: "10px",
            }}
          >
            <Row className="p-3">
              <Col md={9} xs={9} style={{ fontSize: "13px" }}>
                <strong style={{ color: "#370B63" }}>
                  {content[0]?.title}
                </strong>
                <br />
                {content[0]?.paragraph && parse(content[0].paragraph)}
              </Col>
              <Col md={3} xs={3}>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    height: "80px",
                    background: "#FA2545",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src={content[0].image?.data?.attributes?.url}
                    alt="best prices guarantee"
                    style={{ height: "70%", objectFit: "contain" }}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div
            className="onTimeDelivery"
            style={{
              background: "#EAF0FC",
              height: "100px",
              width: "500px",
              marginTop: "30px",
              marginLeft: "40px",
              borderRadius: "10px",
            }}
          >
            <Row className="p-3">
              <Col md={9} xs={9} style={{ fontSize: "13px" }}>
                <strong style={{ color: "#370B63" }}>
                  {" "}
                  {content[1]?.title}
                </strong>
                <br />
                {content[1]?.paragraph && parse(content[1].paragraph)}
              </Col>
              <Col md={3} xs={3}>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    height: "80px",
                    background: "#FA2545",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src={content[1].image?.data?.attributes?.url}
                    alt="best prices guarantee"
                    style={{ height: "70%", objectFit: "contain" }}
                  />
                </div>
              </Col>
            </Row>
          </div>
          <div
            className="onTimeDelivery"
            style={{
              background: "#EAF0FC",
              height: "100px",
              width: "500px",
              marginTop: "30px",
              borderRadius: "10px",
            }}
          >
            <Row className="p-3">
              <Col md={9} xs={9} style={{ fontSize: "13px" }}>
                <strong style={{ color: "#370B63" }}>
                  {" "}
                  {content[2]?.title}
                </strong>
                <br />
                {content[2]?.paragraph && parse(content[2].paragraph)}
              </Col>
              <Col md={3} xs={3}>
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    height: "80px",
                    background: "#FA2545",
                    borderRadius: "10px",
                  }}
                >
                  <img
                    src={content[2].image?.data?.attributes?.url}
                    alt="best prices guarantee"
                    style={{ height: "70%", objectFit: "contain" }}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default GetYourCDR;
