import Head from "next/head";
import { useRouter } from "next/router";
import Advantages from "../../components/CareerEpisodeWriting.js/Advantages";
import AustraliaGuarantees from "../../components/CareerEpisodeWriting.js/AustraliaGuarantees";
import HighQualityCareer from "../../components/CareerEpisodeWriting.js/HighQualityCareer";
import WhatIsCareerEpisode from "../../components/CareerEpisodeWriting.js/WhatIsCareerEpisode";
import CDRReportAccepted from "../../components/Home/CDRReportAccepted";
import Hero from "../../components/Hero";
import Seo from "../../components/Seo";
import parse from "html-react-parser";
const CareerEpisodeWriting = ({ careerRes }) => {
  const router = useRouter();
  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  const { hero, shared, seo } = careerRes;
  return (
    <div>
      <Seo seo={seo} />
      <Hero title={hero?.title} details={hero && parse(hero.paragraph)} />

      <WhatIsCareerEpisode data={careerRes} />
      <CDRReportAccepted
        title={shared?.data?.attributes?.title}
        data={shared && parse(shared.data?.attributes?.paragraph)}
        buttonName="Check Pricing"
        link="/pricing"
      />
      <HighQualityCareer data={careerRes} />
      <Advantages data={careerRes} />
      <AustraliaGuarantees data={careerRes} />
    </div>
  );
};

export const getStaticProps = async () => {
  const { NEXT_STRAPI_API_URL } = process.env;

  const career = await fetch(NEXT_STRAPI_API_URL + "s-career?populate=deep");
  const careerRes = await career.json();

  return {
    props: {
      careerRes: careerRes?.data?.attributes || "",
    },
    revalidate: 1,
  };
};

export default CareerEpisodeWriting;
