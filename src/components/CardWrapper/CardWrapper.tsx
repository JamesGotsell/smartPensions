import React, {useEffect, useState} from "react";
import { Card } from '../Card/Card'
import { GameData, AllData } from '../types/types'
import { useMutation } from "@apollo/react-hooks";
import { ADD_RESULT } from "../../graphql/queries/getResults";
import {
  Link
} from "react-router-dom";
import styled from "styled-components"

interface CardWrapperProps {
  characterGame: boolean;
  firstSelection:  AllData
  secondSelection:  AllData
}


const Heading = styled.h2`
font-size: 1.5em;
text-align: center;
color: black;
font-family: "museo", Helvetica Neue, Helvetica, sans-serif;
`;


export const CardWrapper: React.FC<CardWrapperProps> = ({characterGame, firstSelection, secondSelection}) => {
  const [winner, setWinner] = useState("")
  const [buttondDisplay, setButtondDisplay] = useState(true)
  let [gameCount , setGameCount] = useState(0)
  const [localResult, setLocalResult ] = useState<GameData>({
    wonBy: '',
    gameNumber: 0
  })
  
  const [addResult] = useMutation(ADD_RESULT);

  const updateResultsObj = (winner:string): void => {
    setWinner(winner)
    setGameCount(gameCount+1)
    const localResultsObject:GameData = {
      gameNumber: gameCount,
      wonBy: winner,
      __typename: "Result"

    }
    setLocalResult(localResultsObject)
  }
  const getWinner = (): void => {
  
    if(characterGame) {
      debugger
      const winner = (firstSelection.height > secondSelection.height) ? "player 1" : "computer"
      updateResultsObj(winner)
    }else if(characterGame && (firstSelection.height === secondSelection.height)) {
       debugger
        const winner = "draw"
        updateResultsObj(winner) 
    }
    else if (!characterGame && (firstSelection.hyperdriveRating === secondSelection.hyperdriveRating)) {
      const winner = "draw"
      debugger
      updateResultsObj(winner)
    }
    else if(!characterGame)  {
      debugger
      const winner = (firstSelection.hyperdriveRating > secondSelection.hyperdriveRating) ? "player 1" : "computer"
      updateResultsObj(winner)
    }  
    setButtondDisplay(!buttondDisplay)
  }

  useEffect(() =>{
    console.log(localResult, "local result")
          addResult({
            variables: {
              wonBy: localResult.wonBy ,
              gameNumber: localResult.gameNumber ,
              __typename: "Result"
            },
          });
        
  }, [winner])

  return (
    <div>
        <Card firstSelection={firstSelection} secondSelection={secondSelection} />
        { buttondDisplay ?  <button onClick={getWinner}> <Heading>whos the winner</Heading></button> :  <Heading><Link to="/results">Results</Link></Heading> }

    </div> 
  );
};
