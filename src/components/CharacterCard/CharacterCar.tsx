import React from "react"
interface CharacterProps {
  birthYear: string;
  gender: string;
  height: number
}
export const CharacterCard: React.FC<CharacterProps> = ({birthYear, gender,height}) => {
  // can move this in to the top trumps component
  console.log(birthYear, gender,height)
return (
  <>
    Character card
  </>
);
};
