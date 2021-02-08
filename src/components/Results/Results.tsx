import React, { useState } from "react";
import ReactCardFlip from "react-card-flip"
import { GameData } from '../types/types'
import styled from "styled-components"

interface ResultsProps {
  data: GameData
  isFlipped: boolean
}

const Wrapper = styled.div`
  margin: auto;
  width: 50%;
`
 
const Heading3 = styled.h3`
font-size: 1.5em;
text-align: center;
color: #ffffff;
font-family: "museo", Helvetica Neue, Helvetica, sans-serif;
`;
export const Results: React.FC<ResultsProps>  = ({data,isFlipped}) => {
  
    const ResultCard = ({data}) => {

        return (
          <Wrapper>
            <img height={200} width={200} src='https://www.placecage.com/g/200/300' />
            <Heading3>{data.map((item, i) => {return <p key={i}> the last game {item.wonBy != "draw" ? ` was won By ${item.wonBy}` : `was a draw` }</p>})}</Heading3>
          </Wrapper>
        )
    }

    return (
      <>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <img height={200} width={200} src='https://www.placecage.com/g/300/300' />
          <ResultCard data={data}  />
        </ReactCardFlip>
        
      </>
     
    )

}
