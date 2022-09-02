import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import HowReview from "../../components/CDRReviewing/HowReview";
import ReviewingServices from "../../components/CDRReviewing/ReviewingServices";
import WhyCdr from "../../components/CDRReviewing/WhyCdr";
import Steps from "../../components/CDRWriting/Steps";
import CDRReportAccepted from "../../components/Home/CDRReportAccepted";
import Hero from "../../components/Hero";
import { Container } from "react-bootstrap";
import PurpleHeading from "../../components/PurpleHeading";
import TextParagraph from "../../components/TextParagraph";
import Seo from "../../components/Seo";
import parse from "html-react-parser";
const CDRReviewing = ({ reviewingRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  // console.log("reviewingRes", reviewingRes);
  const { hero, cdr, what, steps, stepsData, shared, seo } = reviewingRes;
  return (
    <div>
      <Seo seo={seo} />
      <Hero title={hero?.title} details={hero && parse(hero.paragraph)} />

      <ReviewingServices data={cdr} />
      <Container className="pt-3">
        <PurpleHeading title={what?.title} />
        <TextParagraph
          family="Arial"
          content={what?.paragraph && parse(what.paragraph)}
        />
      </Container>
      <CDRReportAccepted
        title="To know more about how the CDR Reviewing service provider in Australia can 
        help you get instant help from our professional writers "
        buttonName="Get Free Consultation"
      />
      <WhyCdr data={reviewingRes} />
      <Steps data={stepsData} data2={steps} />
      <HowReview data={reviewingRes} />
    </div>
  );
};

export const getStaticProps = async () => {
  const { NEXT_STRAPI_API_URL } = process.env;

  const reviewing = await fetch(
    NEXT_STRAPI_API_URL + "s-reviewing?populate=deep"
  );
  const reviewingRes = await reviewing.json();

  return {
    props: {
      reviewingRes: reviewingRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default CDRReviewing;
