import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Layout from '../components/header/LayoutHeader'
import axios from 'axios'
import Cookie from 'js-cookie'
import Logo from '../img/kok.png'
import Nanogram from "nanogram.js";
import InstBlock from "../components/instblock";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    flex-direction: column;
`
const MainDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 800px;
    @media (max-width: 800px) {
        width: 600px;
    }
`
const Text = styled.p`
    font-size: 18px;
    font-weight: bold;
`

const Div = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 50px;
    width: 800px;
    margin-bottom: 50px;
`
const Img = styled.img`
    width: 284px;
    height: 284px;
`
const Button = styled.button`
    width: 108px;
    height: 32px;
    background-color: #000000;
    color: #ffffff;
    border-radius: 7px;
`
const DivList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    width: 800px;
`

const Profile = () => {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [login, setLogin] = useState('')
    const [role, setRole] = useState(false)
    const [instagram, setInstagram] = useState("");
  const [photo, setPhoto] = useState("");
  const instagramParser = new Nanogram();

    useEffect(() => {
        let token = Cookie.get('jwttoken')
        if (token) {
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
                login
                name
                    surname
                role
                instagram
              }
            }
              `
                }
            }).then((res) => {
                setLogin(res.data.data.user.login)
                setName(res.data.data.user.name)
                setSurname(res.data.data.user.surname)
                setRole(res.data.data.user.role)
                console.log('res', res)
                if (res.data.data.user.instagram){
                setInstagram(res.data.data.user.instagram)
                instagramParser
                .getMediaByUsername(res.data.data.user.instagram)
                .then((media) => {
                  console.log(media.profile.edge_owner_to_timeline_media.edges);
                  setPhoto(media.profile.edge_owner_to_timeline_media.edges);
                });
            }
            })
        }
    }, [])
    return (
        <Layout>
            <Container>
                <MainDiv>
                    <Text>{login}</Text>
                    <Button>Изменить</Button>
                </MainDiv>
                <Div>
                    <Img src={Logo} />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            marginLeft: 100
                        }}
                    >
                        <Text>{surname || name ? surname : login}</Text>
                        {role === 'EXPERT' && <Button>Expert</Button>}
                        {role === 'ADMIN' && <Button>ADMIN</Button>}
                    </div>
                </Div>
                <MainDiv>
                    <Text>{instagram ?`Instagram: ${instagram}`:""}</Text>
                </MainDiv>
                <DivList>
                    {photo ? photo.map((e) => <InstBlock ul={e} />) : null}
                </DivList>
            </Container>
        </Layout>
    )
}

export default Profile
