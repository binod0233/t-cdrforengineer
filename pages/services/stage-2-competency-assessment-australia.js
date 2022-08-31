import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import CDRReportAccepted from "../../components/Home/CDRReportAccepted";
import CompetencyAssessment from "../../components/Stage2/CompetencyAssessment";
import DocumentsForStage2 from "../../components/Stage2/DocumentsForStage2";
import EngineerStatus from "../../components/Stage2/EngineerStatus";
import Stage2Standards from "../../components/Stage2/Stage2Standards";
import Hero from "../../components/Hero";
import { Container } from "react-bootstrap";
import Seo from "../../components/Seo";
import parse from "html-react-parser";

const Stage2CompetencyAssessment = ({ stage2Res }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  console.log(stage2Res);
  const { hero, content3, trust, seo, shared, shared2 } = stage2Res;

  return (
    <div>
      <Seo seo={seo} />
      <Hero title={hero?.title} details={hero && parse(hero.paragraph)} />

      <CompetencyAssessment data={stage2Res} />
      <CDRReportAccepted
        title={shared?.data?.attributes?.title}
        data={shared && parse(shared.data?.attributes?.paragraph)}
        buttonName="Check Pricing"
        link="/pricing"
      />
      <DocumentsForStage2 data={content3[2]} />
      <EngineerStatus data={trust} />
      <CDRReportAccepted
        title={shared2?.data?.attributes?.title}
        data={shared2 && parse(shared2.data?.attributes?.paragraph)}
        buttonName="Contact Us"
        link="/contactus"
      />
      <Stage2Standards data={stage2Res} />
    </div>
  );
};

export const getStaticProps = async () => {
  const { NEXT_STRAPI_API_URL } = process.env;

  const stage2 = await fetch(NEXT_STRAPI_API_URL + "s-stage2?populate=deep");
  const stage2Res = await stage2.json();

  return {
    props: {
      stage2Res: stage2Res?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default Stage2CompetencyAssessment;
