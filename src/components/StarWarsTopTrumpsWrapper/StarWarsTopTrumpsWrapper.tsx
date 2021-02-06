import React, {useEffect, useState} from "react";
import useStarShipQuery from '../../data/useStarShipQuery'
import usePersonQuery from '../../data/usePersonQuery'
import {CardWrapper} from '../CardWrapper/CardWrapper'

interface WrapperProps {
    characterGame: boolean;
    computerSelection: string;
    player1Selection: string;
}


// need to extract data in to first selection secondSeleciton
export const StarWarsTopTrumpsWrapper: React.FC<WrapperProps> = ({characterGame, computerSelection, player1Selection}) => {
     // can move this in to the top trumps component
     const [selection, setSeleciton] = useState({
       firstSelection: {},
       secondSelection: {}
     })
     if(characterGame) {
      const [person, PersonError, isLoadingPerson ] = usePersonQuery(player1Selection, computerSelection)
      console.log(person)
      // setSeleciton({
      //   firstSelection: person.firstSelection,
      //   secondSelection: person.secondSelection
      // }) 
     }else {
      const [starShip, errorStarShip, isLoadingStarShip] = useStarShipQuery(player1Selection,computerSelection)
      console.log(starShip)
      // setSeleciton({
      //   firstSelection: starShip?.firstSelection,
      //   secondSelection: starShip?.secondSelection 
      // }) 
     }

  // useEffect(() => {
  //   const [person, PersonError, isLoadingPerson ] = usePersonQuery(player1Selection, computerSelection)
  // }, [characterGame])


  return (
    <div>
      <div>StarWarsTopTrumpsWrapper</div>
      <CardWrapper characterGame={characterGame} firstSelection={selection.firstSelection} secondSelection={selection.secondSelection} />
    </div>
  );
};
