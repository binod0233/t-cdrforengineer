import { Col, Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import parse from "html-react-parser";
const StepsBeforeHiring = ({ data }) => {
  const cardContent = [
    {
      image: "/images/cardforaustralia.jpg",
      title:
        "CDR  Writing  Agency  based  in  Australia  provides  quality  service  in comparison.",
      paragraph: `Several   other organisations delivering   similar   services regarding  CDR  writing  are  based  in  countries  other  than  Australia. Organisationsnot   registered   in   Australia   lack   reliable   information sources and understanding of their services. CDR For Engineer keeps track of their sources and uses reliable information to deliver acceptableCDR reportsthat will get you assessed by Engineers Australia  and  can  assist  you  in  selecting  the  best  and  most  reputable engineering profession in Australia.`,
    },
    {
      image: "/images/cardcertificate.png",
      title: "CDR report written by Engineer writer is much better.",
      paragraph: `In the current scenario, we can encounter several CDR Consultantsand service  providers  who offer  CDR  Report  Writing  Services.  Most  of  the organizations  providing  CDR  writing  services  do  not  hire  writers  from Engineering  backgrounds  rathermost  of  them  are  academicwriters                                                                           Engineers  Australia  (EA)  CDR  Criteria  and  Guidelines  can  only  be comprehended by a writer with engineering background. At CDR For Engineer,we minimisethe risk of failures as we have gathered a team with years of   professional   experience   and   knowledge   to   serve   you   with a satisfactory,unique   CDR   report,   according   to   the   standards   of Engineers Australia.`,
    },
    {
      image: "/images/cardregistration.jpg",
      title:
        "CDR Report Writing Service licensed in Australia gives a better service.",
      paragraph: `There   aremany   consultants   based   in   different   countries   outside Australia.  Engineers  who  seek  a  flourishing  career  in  Australia shouldkeep in mind CDR offered by consultants outside Australia minimises the chance of approval. CDR writing service providers outside Australia may not keep updated on Australian Engineering scenarios. CDR For Engineer, an Australian  CDR  writing  service  provider,has  the advantage  in  this regard; weprovide the best CDR report to guarantee your assessment.`,
    },
    {
      image: "/images/cardforimmigration.jpg",
      title:
        "CDR Report Writing Service should be up to date about the immigration process.",
      paragraph: `When it comes to the  migration of skilled engineers, every CDR report writing  service  providermust  be  conversant  with  the  immigration procedure  followed  by  the  Australian  government.  They  should  be awareof  the  immigration  process,  from  the  beginning  to  the  visa application and approval process.`,
    },
  ];
  const { four, fourData } = data;
  return (
    <Container>
      <PurpleHeading title={four?.title} />
      <p className="cdrWritingP" style={{ textAlign: "center" }}>
        {four?.paragraph && parse(four?.paragraph)}
      </p>
      <Row>
        {fourData.map((c, i) => (
          <Col key={c.id} md={6} className="p-4">
            <div className="beforeHiringCard" style={{ height: "580px" }}>
              <Row className="h-35">
                <img
                  src={c?.image?.data?.attributes?.url}
                  alt={c?.image?.data?.attributes?.alternativeText}
                />
              </Row>
              <Row className="h-65 px-3">
                <h5
                  className="stepeBeforeHiringTitle"
                  style={{
                    color: "#FA2545",
                    textAlign: "center",
                    margin: "20px 0",
                  }}
                >
                  {c?.title}
                </h5>
                <div className="cdrWritingP" style={{ textAlign: "center" }}>
                  {c?.paragraph && parse(c.paragraph)}
                </div>
              </Row>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default StepsBeforeHiring;
