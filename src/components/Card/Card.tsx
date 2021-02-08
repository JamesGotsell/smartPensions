import React from "react"
import { AllData } from '../types/types'
import styled from "styled-components"

interface CardProps {
    firstSelection?: AllData
    secondSelection?: AllData
 }
 
 const Heading3 = styled.h3`
    font-size: 1.5em;
    text-align: center;
    color: #ffffff;
    font-family: "museo", Helvetica Neue, Helvetica, sans-serif;
    `;
export const Card: React.FC<CardProps> = ({firstSelection, secondSelection}) => {
  const {
    model,
    hyperdriveRating,
    name,
    height,
    birthYear,
    gender,
  } = firstSelection

  const {
    model: secondSelectionModel,
    hyperdriveRating: secondSelectionHyperdriveRating,
    name: secondSelectionName,
    height: secondSelectionHeight,
    birthYear: secondSelectionBirthYear,
    gender: secondSelectionGender ,
  } = secondSelection

  const parseData = (data) => {
    let  headingWithData = ''
    let key2 = Object.keys(secondSelection).find(key => secondSelection[key] === data);
    let key1 = Object.keys(firstSelection).find(key => firstSelection[key] === data);

    if (key1) {
      headingWithData = `${key1}: ${data}`
     
    }else if(key2) {
      headingWithData = `${key2}: ${data}`
    }
    return ( <p>{headingWithData}</p>)
  }

  const Card = ({title, hyperdriveRating, height, name,  model, gender }) => {
    
    return (
    <>
        <Heading3>{title}</Heading3>
      
          <p>{parseData(height || hyperdriveRating)}</p>
          <p>{parseData(name || model)} </p>
          <p>{birthYear ? parseData(birthYear) : null}</p>
          <p>{gender ? parseData(gender) : null}</p>
        </>
      )
  }
return (
  <>
  { 
  (firstSelection && secondSelection) &&  
    <>
        <Card title={model || name} 
              hyperdriveRating={hyperdriveRating}
              height={height} 
              model={model}
              name={name}
              gender={gender} 
        />
        <Card title={secondSelectionName || secondSelectionModel}
              hyperdriveRating={secondSelectionHyperdriveRating}
              height={secondSelectionHeight} 
              name={secondSelectionName}
              model={secondSelectionModel} 
              gender={secondSelectionGender} 
          />
        </>
        
    }
  </>
);
};
