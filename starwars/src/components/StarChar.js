import React from "react";
import styled from "styled-components";

// const Button1 = styled.button`
//  background-color: seagreen;
//   border-radius:21px;
//   border:1px solid #4e6096;
//   display:inline-block;
//   cursor:pointer;
//   color:#ffffff;
//   font-size:17px;
//   padding:19px 44px;
//   text-decoration:none;
//  display: flex;
//  flex-direction: column;
//  align-items: center;
//  margin-top: 3rem;
//  margin-left: 49rem;
//  margin-bottom: 5rem;
//  `;

const Starcontain = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  width: 20%;
  border: 2px solid black;
  background-color: navy;
  color: white;
`;


export default function StarChar(props) {
 return (
   <Starcontain className="star-char">
     <h2>{props.name}</h2>
     <h3>{props.gender}</h3>
     <h4>{props.height}</h4>
   </Starcontain>
 );
}


