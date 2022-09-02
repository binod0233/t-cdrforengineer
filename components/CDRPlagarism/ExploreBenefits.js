import React from "react";
import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";

const ExploreBenefits = ({ data }) => {
  return (
    <Container>
      <PurpleHeading title={data?.title} />

      <Row>
        <img src={data?.image?.data?.attributes?.url} alt="few tips" />
      </Row>
    </Container>
  );
};

export default ExploreBenefits;
