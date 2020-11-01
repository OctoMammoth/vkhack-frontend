import React from "react";
import styled from "styled-components";
import Layout from "../components/header/LayoutHeader";
import HumanGuitar from "../components/mainPagesUganda/HumanGuitar";
import CoursesList from "../components/mainPagesUganda/СoursesList";
const mainPagesUganda = ({history}) => {
  return (
    <Layout>
      <HumanGuitar />
      <CoursesList history={history} />
    </Layout>
  );
};

export default mainPagesUganda;
