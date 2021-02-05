import React from "react";
import usePersonQuery from "../../data/usePersonQuery";
import useAllStarShipQuery from "../../data/useAllStarShipQuery";


export const StarWarsTopTrumpsWrapper: React.FC = (): React.ReactElement => {
  const [data, error, isLoading] = usePersonQuery();

  const [StarShipIDs, errorStarShipIDs, isLoadingStarShipIDs] = useAllStarShipQuery();

  if (isLoading && isLoadingStarShipIDs) {
    return <div>loading</div>;
  }

  if (error && errorStarShipIDs) {
    return <div>Could not load your feed. Try again</div>;
  }
  console.log(data, "person ids")
  console.log(StarShipIDs, "person ids")
  return (
    <div>
      <div>StarWarsTopTrumpsWrapper</div>
     
    </div>
  );
};
