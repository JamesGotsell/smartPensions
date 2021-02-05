import React from "react";
import { StarWarsTopTrumpsWrapper } from "../StarWarsTopTrumpsWrapper/StarWarsTopTrumpsWrapper";
import useAllPeopleQuery from "../../data/useAllPeopleQuery";
import useAllStarShipQuery from "../../data/useAllStarShipQuery";
import useStarShipQuery from '../../data/useStarShipQuery'
import usePersonQuery from '../../data/usePersonQuery'

// within app we get the 
export const App: React.FunctionComponent = () => {
    const [data, error, isLoading] = useAllPeopleQuery();

    const [StarShipIDs, errorStarShipIDs, isLoadingStarShipIDs] = useAllStarShipQuery();
    console.log(data, "person ids")
    console.log(StarShipIDs, "person ids")
    const [StarShip, errorStarShip, isLoadingStarShip] = useStarShipQuery("c3RhcnNoaXBzOjk=")
    console.log(StarShip, errorStarShip, isLoadingStarShip)
    const [person, PersonError, isLoadingPerson ] = usePersonQuery("cGVvcGxlOjU=")
    console.log(person, PersonError, isLoadingPerson )
return (
    
    <>  

        {/* i need a button that chooses between either person or starship */}
        {/* need merge all ids in to array then chose a random ids from the array */}
        {/* need a computer selection and player 1 */}
        {/* compare values - compare winner win for obj 1 or 2 or drwa  */}
        {/* add results to local state - wi */}
        {/* using react router to route to results page */}
        {/* get the  results from local state then display*/}
        <StarWarsTopTrumpsWrapper />
    </>
)


};
