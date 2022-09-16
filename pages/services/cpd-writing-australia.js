import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Steps from "../../components/CDRWriting/Steps";
import ContinuingServices from "../../components/CPDWriting/ContinuingServices";
import DifferentTypes from "../../components/CPDWriting/DifferentTypes";
import ElementsOfCPD from "../../components/CPDWriting/ElementsOfCPD";
import FeaturesOfCPD from "../../components/CPDWriting/FeaturesOfCPD";
import ImportanceOfCPD from "../../components/CPDWriting/ImportanceOfCPD";
import MostOfYourCPD from "../../components/CPDWriting/MostOfYourCPD";
import CDRReportAccepted from "../../components/Home/CDRReportAccepted";
import Hero from "../../components/Hero";
import Seo from "../../components/Seo";
import parse from "html-react-parser";
const CPDWriting = ({ cpdRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const { hero, how, steps, stepsData, shared, shareds_2, seo } = cpdRes;
  return (
    <div>
      <Seo seo={seo} />
      <Hero title={hero?.title} details={hero && parse(hero.paragraph)} />

      <ContinuingServices data={cpdRes} />
      <CDRReportAccepted
        title={shared?.data?.attributes?.title}
        data={shared && parse(shared.data?.attributes?.paragraph)}
        buttonName="Check Pricing"
      />
      <FeaturesOfCPD data={cpdRes} />
      <DifferentTypes data={cpdRes} />
      <MostOfYourCPD data={how} />
      <Steps data={stepsData} data2={steps} />
      <ElementsOfCPD data={cpdRes} />
      <CDRReportAccepted
        title={shareds_2?.data?.attributes?.title}
        data={shareds_2 && parse(shareds_2.data?.attributes?.paragraph)}
        buttonName="Get Free Consultation"
      />
      <ImportanceOfCPD data={cpdRes} />
    </div>
  );
};

export const getStaticProps = async () => {
  const { NEXT_STRAPI_API_URL } = process.env;

  const cpd = await fetch(NEXT_STRAPI_API_URL + "s-cpd-writing?populate=deep");
  const cpdRes = await cpd.json();

  return {
    props: {
      cpdRes: cpdRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default CPDWriting;
