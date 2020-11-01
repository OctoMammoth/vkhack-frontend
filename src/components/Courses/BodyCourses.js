import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { CoursesDiv } from "../../styled";
import axios from 'axios'

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
  width: 750px;
`;

const BodyCourses = ({history}) => {
    const [state, setState] = useState('')
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
            console.log("res", res);
            setState(res.data.data.getCourses);
            console.log("title", res.data.data.getCourses);
          });
    }, [])
  return (
    <MainDiv>
      {state
          ? state.map((e) => <CoursesDiv onClick={() => {
            // history.push("/")
            history.push(`/course/${e.id}`)
            // console.log(history)
          }}>{e.title}</CoursesDiv>)
          : null}
    </MainDiv>
  );
};

export default BodyCourses;
