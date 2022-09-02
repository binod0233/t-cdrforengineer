import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import ResumeWriting from "../../components/CVResumeWriting.js/ResumeWriting";
import CDRReportAccepted from "../../components/Home/CDRReportAccepted";
import ThingsToConsider from "../../components/CVResumeWriting.js/ThingsToConsider";
import GuideLines from "../../components/CVResumeWriting.js/GuideLines";
import Hero from "../../components/Hero";
import WhyCDR from "../../components/CVResumeWriting.js/WhyCDR";
import Seo from "../../components/Seo";
import parse from "html-react-parser";

const CVResumeWriting = ({ cvRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const { hero, shared, seo, shareds_2, content3 } = cvRes;
  console.log(cvRes);

  return (
    <div>
      <Seo seo={seo} />
      <Hero title={hero?.title} details={hero && parse(hero.paragraph)} />

      <ResumeWriting data={cvRes} />
      <CDRReportAccepted
        title={shared?.data?.attributes?.title}
        data={shared && parse(shared.data?.attributes?.paragraph)}
        buttonName="Contact Us"
        link="/contactus"
      />
      <ThingsToConsider data={content3[0]} />
      <CDRReportAccepted
        title={shareds_2?.data?.attributes?.title}
        data={shareds_2 && parse(shareds_2.data?.attributes?.paragraph)}
        buttonName="Check Pricing"
        link="/pricing"
      />
      <GuideLines data={content3[1]} />
      <WhyCDR data={content3[2]} />
    </div>
  );
};

export const getStaticProps = async () => {
  const { NEXT_STRAPI_API_URL } = process.env;

  const cv = await fetch(NEXT_STRAPI_API_URL + "s-cv?populate=deep");
  const cvRes = await cv.json();

  return {
    props: {
      cvRes: cvRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default CVResumeWriting;
