import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import CDRReportAccepted from "../../components/Home/CDRReportAccepted";
import BestCdrWriting from "../../components/Stage1/BestCdrWriting";
import CDRWants from "../../components/Stage1/CDRWants";
import RelyOn from "../../components/Stage1/RelyOn";
import WhyCdrExpertsForStage1 from "../../components/Stage1/WhyCdrExpertsForStage1";
import Hero from "../../components/Hero";
import Seo from "../../components/Seo";
import parse from "html-react-parser";

const Stage1CompetencyAssessment = ({ stage1Res }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const { hero, why, whycdr, shared, seo } = stage1Res;

  return (
    <div>
      <Seo seo={seo} />
      <Hero title={hero?.title} details={hero && parse(hero.paragraph)} />

      <RelyOn data={stage1Res} />
      <CDRReportAccepted
        title={shared?.data?.attributes?.title}
        data={shared && parse(shared.data?.attributes?.paragraph)}
        buttonName="Contact Us"
        link="/contactus"
      />
      <CDRWants data={stage1Res} />
      <WhyCdrExpertsForStage1 data={why} />
      <BestCdrWriting data={whycdr} />
    </div>
  );
};

export const getStaticProps = async () => {
  const { NEXT_STRAPI_API_URL } = process.env;

  const stage1 = await fetch(NEXT_STRAPI_API_URL + "s-stage1?populate=deep");
  const stage1Res = await stage1.json();

  return {
    props: {
      stage1Res: stage1Res?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default Stage1CompetencyAssessment;
