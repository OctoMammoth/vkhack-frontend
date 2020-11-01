import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { CoursesDiv } from '../../styled'
import axios from 'axios'
import Cookie from 'js-cookie'

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
const CoursesBody = ({ history }) => {
    const [status, setStatus] = useState(true)
    const [courses, setCourses] = useState(null)
    const [myCourses, setMyCourses] = useState(null)
    useEffect(() => {
        let token = Cookie.get('jwttoken')
        if (token)
            axios({
                url: 'https://1dfd378a8e4a.ngrok.io/graphql',
                method: 'POST',
                headers: {
                    Authorization: token
                },
                data: {
                    query: `
                  query{
                    user{
                      courses{
                        course{
                          id
                          title
                        }
                      },
                      myCourses{
                        id
                        title
                      }
                    }
                  }
            `
                }
            }).then((res) => {
                // console.log('res', res)
                setCourses(res.data.data.user.courses)
                // console.log(res.data.data.user.courses)
                setMyCourses(res.data.data.user.myCourses)
                setStatus(false)
            })
        else setStatus('Войдите в аккаунт')
    }, [])
    return (
        <MainBody>
            {!status ? (
                <>
                    {myCourses.length !== 0 ? (
                        <>
                            <DivText>
                                <P>Мои курсы</P>
                            </DivText>
                            {myCourses.map((e) => (
                                <Div>
                                    <CoursesDiv>Course</CoursesDiv>
                                    <Text onClick={() => {
                                            history.push(`/myCourse/${e.id}`)
                                        }}
                                        >{e.title}</Text>
                                </Div>
                            ))}
                        </>
                    ) : (
                        <div />
                    )}
                    {courses.length !== 0 ? (
                        <>
                            <DivText>
                                <P>Курсы</P>
                            </DivText>
                            {courses.map((e) => (
                                <Div>
                                    <CoursesDiv>Course</CoursesDiv>
                                    <Text onClick={() => {
                                            history.push(`/myCourse/${e.id}`)
                                        }}
                                        >{e.course.title}
                                    </Text>
                                </Div>
                            ))}
                        </>
                    ) : (
                        <div />
                    )}
                </>
            ) : (
                <DivText>
                    <P>{status}</P>
                </DivText>
            )}
        </MainBody>
    )
}

export default CoursesBody
