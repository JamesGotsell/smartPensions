import React, {useState} from "react";
import { Card } from '../Card/Card'

import { ApolloConsumer } from "react-apollo";
import gql from "graphql-tag";

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
}

export const CardWrapper: React.FC<CardWrapperProps> = ({characterGame, firstSelection, secondSelection}) => {
  const [winner, setWinner] = useState("")
  const [gameCount , setGameCount] = useState(0)
  const [localResult, setLocalResult ] = useState({})
  const getWinner = () => {
  
    if(characterGame) {
      const winner = (firstSelection.height > secondSelection.height) ? "player 1" : "computer"
      setWinner(winner)
    }else if(characterGame && (firstSelection.height === secondSelection.height)) {
        const winner = "draw"
        setWinner(winner)
    }
    else if (!characterGame && (firstSelection.hyperdriveRating === secondSelection.hyperdriveRating)) {
      const winner = "draw"
      setWinner(winner)
    }
    else if(!characterGame)  {
      const winner = (firstSelection.hyperdriveRating > secondSelection.hyperdriveRating) ? "player 1" : "computer"
      setWinner(winner)
    }
    setGameCount(gameCount+1)
    const localResultsObject = {
      gameNumber: gameCount ,
      wonBy: winner
    }

    setLocalResult(localResultsObject)
    
  }

  const query = gql`
    query GetResults {
      gameResults @client
    }
`;
  const updateItem = () => {
    // console.log(resultOBj)
    // const data = client.readQuery({ query });
    // console.log( data)
    return (
      <ApolloConsumer>
        {cache => (
          <div>
            <form
              onSubmit={e => {
                e.preventDefault();
                let { items } = cache.readQuery({ query });
                debugger
                items = [...items,  localResult];
                cache.writeQuery(items)
              }}
            >
              <button type="submit">Add Item</button>
            </form>
          </div>
        )}
      </ApolloConsumer>
    );
  }
  return (
    <div>
        <Card firstSelection={firstSelection} secondSelection={secondSelection} />
            <button onClick={getWinner}> <h3>whos the winner</h3></button>
       { winner && <p>{winner}</p>})
       {updateItem()}
       
    </div> 
  );
};
