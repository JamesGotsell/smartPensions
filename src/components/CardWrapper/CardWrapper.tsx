import React from "react";

interface StarShipData {
  starship: {
    id: number,
    model: string,
    passengers: string,
    costInCredits: number,
    starshipClass: string,
    maxAtmospheringSpeed: number,
    hyperdriveRating: number
  }
}
interface Person {
  name: string
  height: number,
  birthYear: string,
  gender: string
}


interface CardWrapperProps {
  characterGame: boolean;
  firstSelection?: StarShipData | Person
  secondSelection?: StarShipData | Person
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
