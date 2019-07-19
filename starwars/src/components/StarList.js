import React, { useEffect, useState } from "react";
import axios from "axios";
import StarChar from "./StarChar";
import styled from "styled-components";


// const Buttondays = styled.button`
//  background-color:#4c87ed;
//   border-radius:21px;
//   border:1px solid #4e6096;
//   display:inline-block;
//   cursor:pointer;
//   color:#ffffff;
//   font-size:17px;
//   padding:19px 44px;
//   text-decoration:none;
//  margin: 1.5rem;
//  margin-bottom: 3rem;
// `;


export default function StarList() {
  const [characters, setChars] = useState([]);

    useEffect(() => {
     axios
       .get('https://swapi.co/api/people/?page=1&format=json')
       .then(response => {
         const characters = response.data.results;
        //  //pod = pic of day
        //  console.log("name api:", setChars);
         console.log("char api:", characters);
        //  // KEY PART, SAVE TO STATE:
         setChars(characters);
         // setMediaType(response.data.media_type);



        //  const podDate = response.data.date;
        //  console.log(podDate);
        //  // setDate(podDate)
      
       });
   }, []);

    return (
     <div className="star-list">
        {/* {props.characters.map(characters => {
          <StarChar key={characters} name={props.characters.name}/> */}
          {characters.map((characters, index) => 
            <StarChar name={characters.name} gender={characters.gender} height={characters.height} key={index} />)}
      }
        
        )}

     </div>
   );
    }



      // OLD PROJ
      // const Numbers = () => {
      //   // STEP 2 - add the imported data to state
      
      //   const [numberState, setNumber] = useState(numbers);
      //   // console.log({'numbers', { numberState });
      //   //should be getting an array, numberState is now numbers
      
      //   return (
      //     <div className ="numContent">
      //       {/* STEP 3 - Use .map() to iterate over your array data and return a button
      //        component matching the name on the provided file. Pass
      //        it any props needed by the child component*/
      //        numberState.map((number, index) => (
      //          <NumberButton number={number} key={index} />
      //        ))
      //        }
      //     </div>
      //   );
      //       };
      
      // export default Numbers;