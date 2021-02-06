import React from "react";

interface starship {
  id: number,
  model: string,
  passengers: string,
  costInCredits: number,
  starshipClass: string,
  maxAtmospheringSpeed: number,
  hyperdriveRating: number

}
interface StarShipData {
  firstSelection?: starship
  secondSelection?: starship
}
interface Person {
  name: string
  height: number,
  birthYear: string,
  gender: string
}

interface Charactors {
  firstSelection?: Person
  secondSelection?: Person
}

interface CardWrapperProps {
  characterGame: boolean;
  firstSelection?: StarShipData | Charactors
  secondSelection?: StarShipData | Charactors
}
// need to extract data  and di
export const CardWrapper: React.FC<CardWrapperProps> = ({characterGame, firstSelection, secondSelection}) => {
     // can move this in to the top trumps component
  console.log(characterGame, firstSelection, secondSelection)
  return (
    <div>
      <div>CardWrapper</div>

    </div>
  );
};
