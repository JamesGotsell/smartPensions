import React, {useEffect, useState} from "react";
import { Card } from '../Card/Card'

// import { ApolloConsumer } from "react-apollo";
import { useMutation , useQuery } from "@apollo/react-hooks";
import { ADD_RESULT } from "../../graphql/queries/getResults";

interface AllData {
  id?: number,
  model?: string,
  passengers?: string,
  costInCredits?: number,
  starshipClass?: string,
  maxAtmospheringSpeed?: number,
  hyperdriveRating?: number
  name?: string
  height?: number,
  birthYear?: string,
  gender?: string
}

interface CardWrapperProps {
  characterGame: boolean;
  firstSelection:  AllData
  secondSelection:  AllData
}

interface GameData {
  gameNumber: number;
  wonBy: string; // either computer or  player one
  __typename?: string
}

export const CardWrapper: React.FC<CardWrapperProps> = ({characterGame, firstSelection, secondSelection}) => {
  const [winner, setWinner] = useState("")
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
      const winner = (firstSelection.height > secondSelection.height) ? "player 1" : "computer"

      updateResultsObj(winner)
    }else if(characterGame && (firstSelection.height === secondSelection.height)) {
        const winner = "draw"
        updateResultsObj(winner)
        
    }
    else if (!characterGame && (firstSelection.hyperdriveRating === secondSelection.hyperdriveRating)) {
      const winner = "draw"
      updateResultsObj(winner)
    }
    else if(!characterGame)  {
      const winner = (firstSelection.hyperdriveRating > secondSelection.hyperdriveRating) ? "player 1" : "computer"
      updateResultsObj(winner)
    }
  
  }

  return (
    <div>
        <Card firstSelection={firstSelection} secondSelection={secondSelection} />
        <button onClick={getWinner}> <h3>whos the winner</h3></button>
        { winner && <p>{winner}</p>} 
        {/* <button onClick={() =>  client.writeData({ data: { localResult, __typename: "Results"}})}>stuff</button> */}
        <button
        disabled={!winner}
        onClick={() => {
          console.log(localResult, "local result")
          addResult({
            variables: {
              wonBy: localResult.wonBy ,
              gameNumber: localResult.gameNumber ,
              __typename: "Result"
            },
          });
        }}
      > add winner </button>
    </div> 
  );
};
