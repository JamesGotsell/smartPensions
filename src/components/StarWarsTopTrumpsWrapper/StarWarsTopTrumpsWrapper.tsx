import React from "react";

interface Person {

}
interface StarShip {

}

interface TopTrumpsData {
  person?: Person[]
  starShip?: StarShip[]
}


export const StarWarsTopTrumpsWrapper: React.FC<TopTrumpsData> = () => {


  // if (isLoading && isLoadingStarShipIDs) {
  //   return <div>loading</div>;
  // }

  // if (error && errorStarShipIDs) {
  //   return <div>Could not load your feed. Try again</div>;
  // }

  return (
    <div>
      <div>StarWarsTopTrumpsWrapper</div>
     
    </div>
  );
};
