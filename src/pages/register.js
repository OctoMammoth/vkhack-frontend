import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Cookie from "js-cookie";
import history from "./../components/history";
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Input = styled.input`
  border: 2px solid #0000;
  border-radius: 4px;
  width: 400px;
  height: 50px;
`;

const Button = styled.button`
  border: 2px solid #0000;
  border-radius: 4px;
  width: 400px;
  height: 50px;
`;
const Text = styled.p`
  font-size: 18px;
  font-weight: bold;
`;
const Login = ({ history }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const PostFunc = () => {
    axios({
      url: "https://1dfd378a8e4a.ngrok.io/graphql",
      method: "POST",
      data: {
        query: `
        mutation{
            registerUser(data:{
              email: "${email}"
              login: "${login}"
              password: "${password}"
              name: "${name}"
              surname: "${surname}"
            }){
              token
            }
          }
            `,
      },
    }).then((res) => {
      console.log(res);
      if (res.status == 200) {
        history.push("/login");
      }
    });
  };

  return (
    <Container>
      <Text>Register</Text>
      <Input
        placeholder="login"
        value={login}
        onChange={(e) => {
          setLogin(e.target.value);
        }}
      />
      <Input
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="password"
      />
      <Input
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        placeholder="name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Input
        placeholder="surname"
        value={surname}
        onChange={(e) => {
          setSurname(e.target.value);
        }}
      />
      <Button onClick={PostFunc}>Войти</Button>
    </Container>
  );
};

export default Login;   