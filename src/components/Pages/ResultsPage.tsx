import React, { useEffect, useState } from "react";
import styled from "styled-components"
import {Results} from "../Results/Results"
import  useResultsQuery  from '../../data/useResultsQuery'


export const ResultsPage: React.FunctionComponent = () => {
   const [results, resultsError, isLoadingResults ] = useResultsQuery()
   const [isFlipped, setIsFlipped] = useState(false)

  console.log(results)
return (
    <>  
      {!isLoadingResults && <Results data={results.results} isFlipped={isFlipped}/>}
      <button onClick={() => setIsFlipped(!isFlipped)}>Show Result</button>
    </>
)


};
