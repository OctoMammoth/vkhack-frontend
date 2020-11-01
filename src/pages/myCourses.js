import React from "react";
import Layout from "../components/header/LayoutHeader";
import styled from "styled-components";
import CoursesBody from "../components/myCoursesFolder/LIstMyCours";

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const myCourses = ({history}) => {
  return (
    <Layout>
      <MainDiv>
        <CoursesBody history={history}/>
      </MainDiv>
    </Layout>
  );
};

export default myCourses;
