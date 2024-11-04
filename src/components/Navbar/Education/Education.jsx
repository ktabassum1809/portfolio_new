import React from "react";
import styled from "styled-components";
import EducationData from "./EducationData";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timelineStyles = {
  contentStyle: {
    background: "rgb(16, 23, 37)",
    color: "rgb(152, 155, 161)",
    borderRadius: "10px",
    padding: "35px",
    border: "0.1px solid #306EE8",
    boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
  },
  contentArrowStyle: { borderRight: "7px solid #f4f4f9" },
  iconStyle: { background: "#6c63ff", color: "#fff" },
};

const Role = styled.div`
  margin-bottom: 4px;
  color: ${({ theme }) => `${theme.text_primary}99`};
  font-size: 10px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
`;

function Education() {
  return (
    <div id="education">
      <h2 style={{ textAlign: "center", margin: "25px 0" ,color:"white"}}>Education</h2>
      <p style={{ textAlign: "center", margin: "0 0 25px", color:"rgb(152, 155, 161)",fontSize: "18px" }}>
        Outlined below is a professionally refined summary of my educational
        background for my portfolio.
      </p>

      <VerticalTimeline>
        {EducationData.map((data) => (
          <VerticalTimelineElement
            key={data.id}
            date={data.date}
            iconStyle={timelineStyles.iconStyle}
            contentStyle={timelineStyles.contentStyle}
            contentArrowStyle={timelineStyles.contentArrowStyle}
            icon={
              <img
                src={data.img}
                alt={`${data.school} logo`}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  border: "0.1px solid #306EE8",
                }}
              />
            }
          >
            <Main>
              <img
                src={data.img}
                alt={`${data.school} logo`}
                style={{ width: "60px", height: "60px", borderRadius: "10px" }}
              />

              <Role>
                <h4 style={{ fontSize: "12px" }}>{data.school}</h4>
                <p style={{ fontSize: "12px" }}>Date: {data.date}</p>
              </Role>
            </Main>
            <p style={{ fontSize: "14px" }}>{data.desc}</p>
            <p style={{ fontSize: "14px" }}>{data.degree}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Education;
