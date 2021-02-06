import React, {useState} from "react";
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
     const [selection, setSeleciton] = useState({})
     if(characterGame) {
      const [person, PersonError, isLoadingPerson ] = usePersonQuery(player1Selection, computerSelection)
      console.log(person, "person")
      // console.log(person, PersonError, isLoadingPerson, "person")

     }else {
      const [StarShip, errorStarShip, isLoadingStarShip] = useStarShipQuery(player1Selection,computerSelection)
      // const { firstSelection, secondSelection } = StarShip
      console.log(StarShip, "sharShip")
      console.log(StarShip, errorStarShip, isLoadingStarShip , "starShip")
     }



  return (
    <div>
      <div>StarWarsTopTrumpsWrapper</div>
      <CardWrapper characterGame={characterGame} />
    </div>
  );
};
