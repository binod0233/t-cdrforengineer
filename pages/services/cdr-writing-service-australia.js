import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import AustraliaGuarantees from "../../components/CDRWriting/AustraliaGuarantees";
import CDRAssessmentsComponent from "../../components/CDRWriting/CDRAssessmentsComponent";
import MoreServices from "../../components/CDRWriting/MoreServices";
import CDRReportWriting from "../../components/CDRWriting/CdrReportWriting";
import Steps from "../../components/CDRWriting/Steps";
import StepsBeforeHiring from "../../components/CDRWriting/StepsBeforeHiring";
import CDRReportAccepted from "../../components/Home/CDRReportAccepted";
import Hero from "../../components/Hero";
import Seo from "../../components/Seo";
import parse from "html-react-parser";

const CDRWriting = ({ cdrRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const { hero, shared, stepsData, seo } = cdrRes;

  return (
    <>
      <Seo seo={seo} />
      <Hero title={hero?.title} details={hero && parse(hero.paragraph)} />

      <CDRReportWriting data={cdrRes} />
      <Steps data={stepsData} />
      <StepsBeforeHiring data={cdrRes} />
      <AustraliaGuarantees data={cdrRes} />
      <CDRReportAccepted
        title={shared?.data?.attributes?.title}
        data={shared && parse(shared.data?.attributes?.paragraph)}
        buttonName="Get Free Consultation"
      />
      <CDRAssessmentsComponent data={cdrRes} />
      <MoreServices data={cdrRes} />
    </>
  );
};

export const getStaticProps = async () => {
  const { NEXT_STRAPI_API_URL } = process.env;

  const cdrWriting = await fetch(
    NEXT_STRAPI_API_URL + "s-cdr-writing?populate=deep"
  );

  const cdrRes = await cdrWriting.json();

  return {
    props: {
      cdrRes: cdrRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default CDRWriting;
