import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col, Stack, Form, Button } from "react-bootstrap";

import BlogCard from "../../components/Blog/BlogCard";
import Link from "next/link";
import parse from "html-react-parser";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import moment from "moment";
import Seo from "../../components/Seo";
const SpecificBlog = ({ resBlogData, blogsRes }) => {
  const router = useRouter();
  const form = useRef();

  const id = router.query.slug;
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const canonicalUrl = (
    `https://www.cdrforengineer.com` +
    (router.asPath === "/" ? "" : router.asPath)
  ).split("?")[0];
  // console.log("blogsRes", resBlogData);
  const submitFormhandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zd7zc21",
        "template_7rs4k0f",
        form.current,
        "UD1lBl5a6755saSKU"
      )
      .then(
        (result) => {
          alert("Email sent.");
          setFullName("");
          setEmail("");
          setPhone("");
          setMessage("");
        },
        (error) => {
          console.log(error);
          alert("Sorry something went wrong.");
        }
      );
  };
  return (
    <>
      {router.isFallback ? (
        <>Loading...</>
      ) : (
        <div>
          {/* <Head>
            <title>{id}</title>
            <meta name="description" content={id} />
            <link rel="canonical" href={canonicalUrl} />
          </Head> */}
          <Seo seo={resBlogData?.attributes?.seo} />
          <div
            style={{
              background: `linear-gradient(
        90deg,
        #60269e 0%,
        #4c1980 35.73%,
        #360b62 100%
      )`,
              minHeight: "6rem",
            }}
          >
            <div className="px-5 ">
              <Row>
                <p className="mt-5  text-center text-md-start text-white">
                  Home &gt; Blogs &gt; {resBlogData?.attributes?.category}
                  {/* <strong>{title}</strong> */}
                </p>
              </Row>
            </div>
          </div>
          <Container>
            {" "}
            {/* <div className="	d-none d-sm-block"> */}
            <div className="	">
              <Row className="py-4">
                <img
                  src={resBlogData?.attributes?.image?.data?.attributes?.url}
                  className="order-sm-2 col-md-6"
                />
                <div className="order-sm-1 shadow-sm col-md-6 ">
                  <div className="card-body ">
                    <p
                      className="card-text"
                      style={{
                        fontFamily: "Arial",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "15px",
                        lineHeight: "17px",
                        color: "#370C64",
                      }}
                    >
                      {resBlogData?.attributes?.category}
                    </p>
                    <p
                      className="card-text random"
                      style={{
                        fontFamily: "Century Gothic",
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "20px",
                        lineHeight: "25px",
                      }}
                    >
                      {resBlogData?.attributes?.title}
                    </p>
                    <p
                      className="card-text"
                      style={{
                        fontFamily: "Arial",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "15px",
                        lineHeight: "17px",
                        color: "#666666",
                      }}
                    >
                      {resBlogData?.attributes?.description}
                    </p>
                    <div
                      className="d-flex justify-content-between align-items-center"
                      style={{
                        fontFamily: "Arial",
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "15px",
                        lineHeight: "17px",
                        color: "#370C64",
                      }}
                    >
                      <small className="text-muted">
                        {" "}
                        {moment(resBlogData?.attributes?.createdAt).fromNow()}
                      </small>
                      <Link href="/">
                        <button
                          type="button"
                          className="btn btn-sm shadow-none hide"
                        >
                          continue reading
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Row>
            </div>
            <Row className="pt-5">
              <Col md={8}>
                {" "}
                {resBlogData?.attributes?.content &&
                  parse(resBlogData?.attributes?.content).map((item, index) => (
                    <div key={item.key}>
                      {item.type === "h2" ? (
                        <div>
                          <h2
                            id={item.key}
                            style={{
                              fontFamily: "Asap",
                              fontWeight: "700",
                              fontSize: "26px",
                              lineHeight: "29.8px",
                              color: "#370C64",
                            }}
                          >
                            {parse(resBlogData.attributes.content)[item.key]}
                          </h2>
                        </div>
                      ) : (
                        <>{parse(resBlogData.attributes.content)[item.key]}</>
                      )}
                    </div>
                  ))}
              </Col>
              <Col>
                <Stack gap={3}>
                  <div className="p-1 border">
                    <h3>Table of Content</h3>
                    {resBlogData?.attributes?.content &&
                      parse(resBlogData?.attributes?.content).map(
                        (item, index) => (
                          <div key={item.key}>
                            {item.type === "h2" && (
                              <>
                                <Link id={item.key} href={`#${item.key}`}>
                                  <a>
                                    <span style={{ color: "#203546" }}>
                                      {
                                        parse(resBlogData.attributes.content)[
                                          item.key
                                        ].props.children
                                      }
                                    </span>
                                  </a>
                                </Link>
                                <br />
                              </>
                            )}
                          </div>
                        )
                      )}
                  </div>
                  <div
                    style={{
                      background:
                        "linear-gradient(90deg, #60269E 0%, #4C1980 35.73%, #360B62 100%)",
                    }}
                  >
                    <Row className="m-0 p-4 " style={{ color: "white" }}>
                      <h5 className="pb-2">
                        World-className articles, delivered weekly.
                      </h5>
                      <Form.Control
                        placeholder="Add your item here..."
                        className="mb-2 "
                      />
                      <Button variant="danger ">Suscribe</Button>
                      <p className="pt-2 ">
                        Subscription implies consent to our privacy policy
                      </p>
                      {/* <Row className=" p-5">
                   
                  </Row> */}
                    </Row>
                  </div>
                  <h3>Want to share</h3>
                  <div className="d-flex  flex justify-content-start  ">
                    <a
                      href="https://www.facebook.com/cdrforengineer001"
                      target="_blank"
                      rel="noreferrer"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      <Button
                        variant="white"
                        size="sm"
                        style={{
                          backgroundColor: "#29487D",
                          color: "white",
                        }}
                      >
                        <FacebookIcon />
                        Share on Facebook
                      </Button>{" "}
                    </a>
                    <div className="px-1">
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: "none", color: "white" }}
                      >
                        <Button
                          variant="white"
                          size="sm"
                          style={{
                            backgroundColor: "#1DA1F2",
                            color: "white",
                          }}
                          className=""
                        >
                          <TwitterIcon />
                          Share on Twitter
                        </Button>
                      </a>
                    </div>
                  </div>
                  <div className="d-flex  flex justify-content-start  ">
                    <Button
                      variant="white"
                      size="sm"
                      style={{
                        backgroundColor: "#C8232C",
                        color: "white",
                      }}
                    >
                      <PinterestIcon />
                      Share on Pinterest
                    </Button>{" "}
                    <div className="px-1">
                      <Button
                        variant="white"
                        size="sm"
                        style={{
                          backgroundColor: "#0E76A8",
                          color: "white",
                        }}
                        className=""
                      >
                        <LinkedInIcon />
                        Share on LinkedIn
                      </Button>{" "}
                    </div>
                  </div>
                  <h2>Trending Articles</h2>
                  {blogsRes &&
                    blogsRes.slice(0, 3).map((item, index) => (
                      <Row key={item?.id}>
                        <p>{item?.attributes?.category}</p>
                        <p>
                          {item?.attributes?.description?.substring(0, 200)}..
                        </p>
                        <hr className="bg-danger border-2 border-top border-danger" />
                      </Row>
                    ))}
                  <h2>Read Next</h2>
                  {blogsRes &&
                    blogsRes.slice(0, 3).map((item, index) => (
                      <Row key={item?.id}>
                        <BlogCard item={item} />
                      </Row>
                    ))}
                  <h2>Our Blog Categories</h2>
                  <div className="d-flex  flex justify-content-start  ">
                    <Button
                      variant="white"
                      size="sm"
                      style={{
                        backgroundColor: "#EEDDFF",
                        color: "#461578",
                        borderRadius: "20px",
                      }}
                    >
                      Australia Migration
                    </Button>{" "}
                    <div className="px-1">
                      <Button
                        variant="white"
                        size="sm"
                        style={{
                          backgroundColor: "#EEDDFF",
                          color: "#461578",
                          borderRadius: "20px",
                        }}
                        className=""
                      >
                        Skill Assessment
                      </Button>{" "}
                    </div>
                  </div>
                  <div className="d-flex flex-row justify-content-start bd-highlight">
                    <Button
                      variant="white"
                      size="sm"
                      // className="bg-light"
                      style={{
                        backgroundColor: "#EEDDFF",
                        color: "#461578",
                        borderRadius: "20px",
                      }}
                    >
                      CDR Service
                    </Button>{" "}
                  </div>
                  <h2>How Was the Blog</h2>
                  <Form
                    ref={form}
                    onSubmit={submitFormhandler}
                    // className="bg-white p-4 formContainer"
                  >
                    <Form.Group
                      className="mb-3"
                      controlId="sitename"
                      style={{ display: "none" }}
                    >
                      <Form.Control
                        placeholder="Site Name"
                        value="CDR For Engineer"
                        readOnly
                        className="inputField"
                        name="subject"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="fullName">
                      <Form.Control
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="inputField"
                        name="fullName"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="email">
                      <Form.Control
                        type="text"
                        placeholder="Email"
                        value={email}
                        className="inputField"
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="message">
                      <Form.Control
                        as="textarea"
                        rows={6}
                        placeholder="Your message"
                        value={message}
                        className="inputField"
                        onChange={(e) => setMessage(e.target.value)}
                        name="message"
                      />
                    </Form.Group>
                    <Row className="d-flex align-items-center justify-content-center">
                      <Button
                        className="formSubmitButton"
                        variant="danger"
                        style={{
                          alignSelf: "center",
                          color: "white",
                          width: "80%",
                        }}
                        type="submit"
                      >
                        Post Comment
                      </Button>
                    </Row>
                  </Form>

                  <br />
                </Stack>
              </Col>
            </Row>
          </Container>
          <div
            style={{
              background:
                "linear-gradient(90deg, #60269E 0%, #4C1980 35.73%, #360B62 100%)",
            }}
          >
            {/* <Stack gap={3} style={{ color: "white" }}> */}
            <div
              className="d-flex align-items-center flex-column bd-highlight mb-3"
              style={{ color: "white", height: "200px" }}
            >
              {/* <DesignBubble colour="yellow" bottom="-6rem" right="-39rem" /> */}
              <div className="">
                <h2 className="px-3" style={{ textAlign: "center" }}>
                  We CDRforengineer known for Best Quality CDR writing and
                  reviewing service agency strive to help each field of
                  engineers get the 100% Approval outcome.
                </h2>
              </div>
              <div className="">
                Subscription implies consent to our privacy policy
              </div>
              <Button variant="danger " className="">
                Suscribe
              </Button>
            </div>
            {/* </Stack> */}
          </div>
          <div className="album py-5 ">
            <div className="container">
              <h2 className="pb-5">Most-read Articles</h2>
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                {blogsRes &&
                  blogsRes.slice(0, 3).map((item, index) => (
                    <div key={item?.id}>
                      <BlogCard item={item} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <br />
        </div>
      )}
    </>
  );
};

export async function getStaticPaths() {
  const blog = await fetch("https://cdrforengineer.herokuapp.com/api/blogs");
  const allBlogs = await blog.json();
  return {
    paths: allBlogs.data.map((blog) => ({
      params: {
        slug: blog.attributes.slug,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const blog = await fetch(
    `https://cdrforengineer.herokuapp.com/api/blogs/${params.slug}?populate=deep`
  );
  const blogData = await blog.json();
  const blogs = await fetch(
    `https://cdrforengineer.herokuapp.com/api/blogs?populate=deep`
  );
  const blogDatas = await blogs.json();

  return {
    props: {
      resBlogData: blogData?.data,
      blogsRes: blogDatas?.data,
    },

    revalidate: 1,
  };
}

export default SpecificBlog;
