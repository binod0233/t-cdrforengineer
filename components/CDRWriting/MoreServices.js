import { Container, Row } from "react-bootstrap";
import PurpleHeading from "../PurpleHeading";
import parse from "html-react-parser";

const MoreServices = ({ data }) => {
  const moreServices = [
    {
      title:
        "1. Career Episode Report Writing service by Experienced professionals.",
      paragraph: `Career episode report writing is a crucial part of CDR Report writing that needs more attention and effort for making a good impression on (EA) 
    Engineers Australia. It demonstrates different aspects of engineering work, skills, knowledge, and working experience. All the Aspirants Applicants 
    need to submit three career Episodes to EA that reflect your skill, knowledge, capacity as well as experience in the engineering field so you need 
    to choose the best writers from engineering backgrounds to showcase your competencies as per Engineers Australia Guidelines. Our Professional 
    Writers are experts in career episode repost writing as per your requirements before deadlines.`,
    },
    {
      title: "2. Summary statement writing  ",
      paragraph: `Summary Statement writing covers a brief explanation of all three Career episodes prepared by an applicant mentioned in the CDR Report. If we 
    talk about its basic structure it is in tabular form as instructed by (EA) Engineers Australia. We know the first impression is the last impression so 
    make a good first impression with a very quick summary of all of the three career episodes.CDRAustraliaMigration is here to help you cover all the 
    aspects and elements needed in your summary statement.`,
    },
    {
      title: "3. Continuing professional Development Writing service",
      paragraph: `CPD continuing professional Development for (EA) Engineers Australia is one of the important parts of CDR (Competency Demonstration Report) 
    for Australia skill migration and it cannot be taken for granted. CPD for EA is a record or documentation of the professional experience like knowledge, 
    skills, experience, internship or training, surveys, etc gained by the engineer in the field of engineering. CPD structure format should be in a list format 
    and it is usually classified into two parts they are training based and development based so you need professional experience writers to prepare your 
    continuing professional Development writing (CPD).`,
    },
    {
      title: "4. CV or Resume writing service",
      paragraph: `CV which is also known as curriculum vitae or Resume writings for EA-Engineers Australia should be written precisely and perfectly by following the 
    formats in the right ways. A clearly and perfectly written CV or Resume covering all elements such as educational background, work experience, 
    accomplishments, objectives, and important credentials is the best way to create a positive impression on the (EA) engineers in Australia. we  CDR
    Australiamigration provides the best quality CDR, CV, or Resume writing services for Engineers Australia by following all the strict rules and guidelines 
    mentioned in the MSA booklet.`,
    },
  ];
  const { whatOther, image3, grab } = data;
  return (
    <Container>
      <PurpleHeading title={whatOther?.title} />
      <div className="cdrWritingP">
        {whatOther?.paragraph && parse(whatOther.paragraph)}
      </div>

      <Row className="px-5 py-4">
        <Row className="px-5">
          <img
            src={image3?.data[0]?.attributes?.url}
            alt={image3?.data[0]?.attributes?.alternativeText}
          />
        </Row>
      </Row>
      <PurpleHeading title={grab?.title} />
      <div className="cdrWritingP">
        {grab?.paragraph && parse(grab.paragraph)}
      </div>
    </Container>
  );
};

export default MoreServices;
