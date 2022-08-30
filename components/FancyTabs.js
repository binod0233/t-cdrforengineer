import { useState } from "react";
import { Row } from "react-bootstrap";
import parse from "html-react-parser";
const FancyTabs = ({ data, fancyData }) => {
  const [activeTitle, setActiveTitle] = useState(
    data ? data[0]?.title : fancyData[0]?.title
  );
  return (
    <>
      {fancyData && (
        <Row
          className="ps-0  bg-white my-5"
          style={{ fontSize: "18px", fontFamily: "Arial", fontWeight: "400" }}
        >
          <div
            className="fancyTabsContainer"
            style={{
              display: "flex",
              justifyContent: "start",
              marginTop: "-20px",
              marginBottom: "40px",
              marginLeft: "-20px",
            }}
          >
            {fancyData.map((d, index) => (
              <div
                key={d?.id}
                className="p-2 mx-2 tabContainer"
                style={{
                  background:
                    activeTitle === fancyData[index]?.title
                      ? "white"
                      : "#390D66",
                  color:
                    activeTitle === fancyData[index]?.title
                      ? "#390D66"
                      : "white",
                  borderRadius: "10px",
                }}
                onClick={(e) => setActiveTitle(d?.title)}
              >
                {d?.title}
              </div>
            ))}
          </div>

          <p className="mb-5 ps-5 fancyTabsData">
            {activeTitle === fancyData[0]?.title &&
              parse(fancyData[0].paragraph)}
            {activeTitle === fancyData[1]?.title &&
              parse(fancyData[1].paragraph)}
            {activeTitle === fancyData[2]?.title &&
              parse(fancyData[2].paragraph)}
            {activeTitle === fancyData[3]?.title &&
              parse(fancyData[3].paragraph)}
            {activeTitle === fancyData[4]?.title &&
              parse(fancyData[4].paragraph)}
          </p>
        </Row>
      )}
      {data && (
        <Row
          className="ps-0  bg-white my-5"
          style={{ fontSize: "18px", fontFamily: "Arial", fontWeight: "400" }}
        >
          <div
            className="fancyTabsContainer"
            style={{
              display: "flex",
              justifyContent: "start",
              marginTop: "-20px",
              marginBottom: "40px",
              marginLeft: "-20px",
            }}
          >
            {data.map((d, index) => (
              <div
                key={index}
                className="p-2 mx-2 tabContainer"
                style={{
                  background:
                    activeTitle === data[index].title ? "white" : "#390D66",
                  color:
                    activeTitle === data[index].title ? "#390D66" : "white",
                  borderRadius: "10px",
                }}
                onClick={(e) => setActiveTitle(d.title)}
              >
                {d.title}
              </div>
            ))}
          </div>

          <p className="mb-5 ps-5 fancyTabsData">
            {activeTitle === data[0].title && data[0].details}
            {activeTitle === data[1].title && data[1].details}
            {activeTitle === data[2].title && data[2].details}
            {activeTitle === data[3]?.title && data[3]?.details}
            {activeTitle === data[4]?.title && data[4]?.details}
          </p>
        </Row>
      )}
    </>
  );
};

export default FancyTabs;
