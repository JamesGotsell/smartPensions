import React, {useEffect, useState} from "react";
import useStarShipQuery from '../../data/useStarShipQuery'
import usePersonQuery from '../../data/usePersonQuery'
import {CardWrapper} from '../CardWrapper/CardWrapper'

interface WrapperProps {
    characterGame: boolean;
    gameTitle: string;
    computerSelection: string;
    player1Selection: string;
}

interface Selection {
  firstSelection?: {},
  secondSelection?: {}
}

// need to extract data in to first selection secondSeleciton
export const StarWarsTopTrumpsWrapper: React.FC<WrapperProps> = ({characterGame, computerSelection, player1Selection, gameTitle}) => {
     // can move this in to the top trumps component
     const [selection, setSeleciton] = useState<Selection>({
      firstSelection: {},
      secondSelection: {}
     })
     const [person, PersonError, isLoadingPerson ] = usePersonQuery(player1Selection, computerSelection)
     const [starShip, errorStarShip, isLoadingStarShip] = useStarShipQuery(player1Selection,computerSelection)
 


  useEffect(() => {
      if(characterGame && person) {
          setSeleciton({
            firstSelection: person.firstSelection,
            secondSelection: person.secondSelection
          })
      }
      if(!characterGame && starShip) {
        setSeleciton({
          firstSelection: starShip.firstSelection,
          secondSelection: starShip.secondSelection
        })
      }

      if(characterGame && !person) {
        setSeleciton({
          firstSelection: {

          },
          secondSelection: {

          }
        })
      }
  
  }, [person, starShip])

 

  if (isLoadingPerson || isLoadingStarShip) return null;


  return (
    <div>
      <h1>{gameTitle}</h1>
      <CardWrapper characterGame={characterGame} firstSelection={selection.firstSelection} secondSelection={selection.secondSelection} />
    </div>
  );
};
