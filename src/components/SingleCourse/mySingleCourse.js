import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { CoursesDiv } from '../../styled'
import Cookies from 'js-cookie'
import axios from 'axios'

const MainBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 70px;
`
const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`

const Text = styled.p`
    font-size: 18px;
    font-weight: bold;
    margin-left: 61px;
`

const P = styled.div`
    display: flex;
    font-size: 18px;
    font-weight: bold;
`
const DivText = styled.div`
    display: flex;
    justify-content: flex-start;
`

const SingleCourse = ({ id }) => {
    const [show, setShow] = useState(null)
    const [course, setCourse] = useState(null)
    const [token, setToken] = useState(null)
    // console.log(id)
    useEffect(() => {
        if (Cookies.get('jwttoken')) setToken(Cookies.get('jwttoken'))
        console.log(id)
        axios({
            url: 'https://1dfd378a8e4a.ngrok.io/graphql',
            method: 'POST',
            headers: {
                Authorization: token
            },
            data: {
                query: `
                  query{
                    getCoursePrivate(where: {id : "${id}"}){
                      title
                      description
                      author{
                        login
                      },
                      sessions{
                          id
                          title
                          date
                      }
                      startAt
                      endAt
                    }
                  }
            `
            }
        }).then((res) => {
            console.log('result', res)
            setCourse(res.data.data.getCoursePrivate)
        })
    }, [])

    return (
        <MainBody>
            {course ? (
                <div>
                    <DivText>
                        <P>{course.title}</P>
                    </DivText>
                    {show ? <Text style={{ color: show.color }}> {show.message} </Text> : <></>}
                    <Div>
                        <CoursesDiv>Course</CoursesDiv>
                        <div>
                            <Text>Автор: {course.author.login}</Text>
                            <Text>Начало: {course.startAt}</Text>
                            <Text>Конец: {course.endAt}</Text>
                        </div>
                    </Div>
                    <br />
                    <br />
                    <DivText>
                        <P>Уроки</P>
                    </DivText>
                    <div>
                        {course.sessions.map((e) => (
                            <>
                                <Text>{e.title}</Text>
                                <Text style={{fontWeight: 400, marginBottom: 50}}>{new Date(e.date).toString()}</Text>
                            </>
                        ))}
                    </div>
                </div>
            ) : (
                <Text>Курс не найден</Text>
            )}
        </MainBody>
    )
}

export default SingleCourse
