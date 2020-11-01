import React from 'react'
import styled from 'styled-components'
import SingleCourse from './../components/SingleCourse/singleCourse'
import Layout from "../components/header/LayoutHeader";
import Header from './../components/header/Navbar'

const MainDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const coursePage = (ctx) => {
    return (
        <Layout>
            <MainDiv>
                <SingleCourse id = {ctx.match.params.id}/>
            </MainDiv>
        </Layout>
    )
}

export default coursePage