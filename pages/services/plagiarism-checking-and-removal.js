import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ExploreBenefits from "../../components/CDRPlagarism/ExploreBenefits";
import PlagarismChecking from "../../components/CDRPlagarism/PlagarismChecking";
import WhyCDR from "../../components/CDRPlagarism/WhyCDR";
import Steps from "../../components/CDRWriting/Steps";
import Hero from "../../components/Hero";
import Seo from "../../components/Seo";
import parse from "html-react-parser";
const CDRPlagarismCheckingAndRemoval = ({ plagiarismRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const { hero, lets, stepsData, shared, seo } = plagiarismRes;

  return (
    <div>
      <Seo seo={seo} />
      <Hero title={hero?.title} details={hero && parse(hero.paragraph)} />

      <PlagarismChecking data={plagiarismRes} />
      <ExploreBenefits data={lets} />
      <Steps data={stepsData} />
      <WhyCDR data={plagiarismRes} />
    </div>
  );
};
export const getStaticProps = async () => {
  const { NEXT_STRAPI_API_URL } = process.env;

  const plagiarism = await fetch(
    NEXT_STRAPI_API_URL + "s-plagiarism?populate=deep"
  );
  const plagiarismRes = await plagiarism.json();

  return {
    props: {
      plagiarismRes: plagiarismRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default CDRPlagarismCheckingAndRemoval;
