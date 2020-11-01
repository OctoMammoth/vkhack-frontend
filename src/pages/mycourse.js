import React from 'react'
import styled from 'styled-components'
import MySingleCourse from './../components/SingleCourse/mySingleCourse'
import Layout from "../components/header/LayoutHeader";

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const coursePage = (ctx) => {
    return (
        <Layout>
            <MainDiv>
                <MySingleCourse id = {ctx.match.params.id}/>
            </MainDiv>
        </Layout>
    )
}

export default coursePage