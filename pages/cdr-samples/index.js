import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Hero from "../../components/Hero";
import CDRReportAccepted from "../../components/Home/CDRReportAccepted";
import FreeDownload from "../../components/Samples/FreeDownload";
import HighQualityCDRSamples from "../../components/Samples/HighQualityCDRSamples";
import HowHelps from "../../components/Samples/HowHelps";
import SamplesForEngineers from "../../components/Samples/SamplesForEngineers";
import WhyRely from "../../components/Samples/WhyRely";
import Seo from "../../components/Seo";
import parse from "html-react-parser";

const Samples = ({ sampleRes }) => {
  const router = useRouter();
  console.log("sampleRes", sampleRes);
  const { hero, sample, seo, shared, shareds_2, title, free } = sampleRes;

  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];

  return (
    <div>
      <Seo seo={seo} />
      <Hero
        title={hero?.title}
        details={hero?.paragraph && parse(hero.paragraph)}
      />
      <SamplesForEngineers data={sample} />
      <CDRReportAccepted
        title={shared?.data?.attributes?.title}
        data={
          shared?.data?.attributes?.paragraph &&
          parse(shared.data.attributes.paragraph)
        }
        buttonName="Contact Us"
      />
      <HighQualityCDRSamples />
      <CDRReportAccepted
        title={shareds_2?.data?.attributes?.title}
        data={
          shareds_2?.data?.attributes?.paragraph &&
          parse(shareds_2.data.attributes.paragraph)
        }
        buttonName="Chat With Us"
      />
      <HowHelps data={sampleRes} />
      <WhyRely />
      <FreeDownload data={free} />
    </div>
  );
};

export async function getStaticProps({ params }) {
  const { NEXT_STRAPI_API_URL } = process.env;

  const samples = await fetch(NEXT_STRAPI_API_URL + `cdr-sample?populate=deep`);
  const sampleRes = await samples.json();

  return {
    props: {
      sampleRes: sampleRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
}

export default Samples;
