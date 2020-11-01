import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Text } from "../../styled";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Cookie from "js-cookie";
import axios from "axios";
const NavbarMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
const NavbarList = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 20px;
  @media (max-width: 800px) {
    
  }
`;
const Logo = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  margin-right: 400px;
  margin-left: 20px;
`;

const Navbar = () => {
  const [name, setName] = useState();
  const [role, setRole] = useState('USER')
  useEffect(() => {
    let token = Cookie.get("jwttoken");
    if (token) {
      axios({
        url: "https://1dfd378a8e4a.ngrok.io/graphql",
        method: "POST",
        headers: {
          Authorization: token,
        },
        data: {
          query: `
        query{
          user{
            login
            role
          }
        }
          `,
        },
      }).then((res) => {
        setName(res.data.data.user.login);
        setRole(res.data.data.user.role)
      });
    }
  }, []);
  return (
    <NavbarMain>
      <Link to={'/'}><Logo>InEducation</Logo></Link>
      <NavbarList>
        <Link
          to="/Courses"
          style={{ color: "#000000", fontSize: 16, textDecoration: "none" }}
        >
          Курсы
        </Link>
        <Link
          to="/MyCourses"
          style={{ color: "#000000", fontSize: 16, textDecoration: "none" }}
        >
          Мои курсы
        </Link>
        { role === "ADMIN"
          ? (
            <Link
          to="/MyCourses"
          style={{ color: "#000000", fontSize: 16, textDecoration: "none" }}
        >
          Репорты
        </Link>
          )
          :<></>

        }
        {name ? (
          <Link
            to="/profile"
            style={{ color: "#000000", fontSize: 16, textDecoration: "none" }}
          >
            {name}
          </Link>
        ) : (
          <Link
            to="/LogIn"
            style={{ color: "#000000", fontSize: 16, textDecoration: "none" }}
          >
            Войти
          </Link>
        )}
      </NavbarList>
    </NavbarMain>
  );
};

export default Navbar;
