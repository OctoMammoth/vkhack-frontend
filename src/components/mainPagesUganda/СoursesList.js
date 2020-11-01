import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import CoursesBody from "../myCoursesFolder/LIstMyCours";

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 50px;
`;
const CoursesText = styled.p`
  font-size: 18px;
  color: gray;
`;
const CoursesDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  width: 750px;
`;
const CoursesBlock = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  width: 215px;
  height: 215px;
  background: #ffffff;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;
const CoursesList = ({ history }) => {
  const [state, setState] = useState("");
  useEffect(() => {
    axios({
      url: "https://1dfd378a8e4a.ngrok.io/graphql",
      method: "POST",
      data: {
        query: `
        query{
          getCourses{
            title 
            id
          }
        }
          `,
      },
    }).then((res) => {
      // console.log("res", res);
      setState(res.data.data.getCourses);
      // console.log("title", res.data.data.getCourses);
    });
  }, []);
  return (
    <MainDiv>
      <CoursesDiv>
        {state
          ? state.map((e) => <CoursesBlock onClick={() => {
            // history.push("/")
            history.push(`/course/${e.id}`)
            // console.log(history)
          }}>{e.title}</CoursesBlock>)
          : null}
      </CoursesDiv>
    </MainDiv>
  );
};

export default CoursesList;
