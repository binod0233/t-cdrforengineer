import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import WhatIsSummary from "../../components/SummaryStatementWriting/WhatIsSummary";
import CDRReportAccepted from "../../components/Home/CDRReportAccepted";
import ImportantElement from "../../components/SummaryStatementWriting/ImportantElement";
import TopNotchTips from "../../components/SummaryStatementWriting/TopNotchTips";
import WhyChooseCdr from "../../components/SummaryStatementWriting/WhyChooseCdr";
import Hero from "../../components/Hero";
import Seo from "../../components/Seo";
import parse from "html-react-parser";
const SummaryEpisodeWriting = ({ summaryRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const { hero, shared, seo } = summaryRes;
  console.log("summaryRes", summaryRes);

  return (
    <div>
      <Seo seo={seo} />
      <Hero title={hero?.title} details={hero && parse(hero.paragraph)} />

      <WhatIsSummary data={summaryRes} />
      <CDRReportAccepted
        title={shared?.data?.attributes?.title}
        data={shared && parse(shared.data?.attributes?.paragraph)}
        buttonName="Check Pricing"
        link="/pricing"
      />
      <ImportantElement data={summaryRes} />
      <TopNotchTips data={summaryRes} />
      <WhyChooseCdr data={summaryRes} />
    </div>
  );
};

export const getStaticProps = async () => {
  const { NEXT_STRAPI_API_URL } = process.env;

  const summary = await fetch(NEXT_STRAPI_API_URL + "s-summary?populate=deep");
  const summaryRes = await summary.json();

  return {
    props: {
      summaryRes: summaryRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default SummaryEpisodeWriting;
