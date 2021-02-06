import React, {useState} from "react";
import { Card } from '../Card/Card'
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

export const CardWrapper: React.FC<CardWrapperProps> = ({characterGame, firstSelection, secondSelection}) => {
  const [winner, setWinner] = useState("")

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
    
  }
  return (
    <div>
       <Card firstSelection={firstSelection} secondSelection={secondSelection} /> 
       <button  onClick={getWinner}> <h3>whos the winner</h3></button>
       { winner && <p>{winner}</p>}
    </div> 
  );
};
