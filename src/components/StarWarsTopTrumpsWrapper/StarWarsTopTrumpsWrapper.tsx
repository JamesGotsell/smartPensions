import React from "react";
import usePersonQuery from "../../data/usePersonQuery";


export const StarWarsTopTrumpsWrapper: React.FC = (): React.ReactElement => {
  const [data, error, isLoading] = usePersonQuery();

  if (isLoading) {
    return <div>loading</div>;
  }

  if (error) {
    return <div>Could not load your feed. Try again</div>;
  }
  console.log(data)
  return (
    <div>
      <div>StarWarsTopTrumpsWrapper</div>
     
    </div>
  );
};
