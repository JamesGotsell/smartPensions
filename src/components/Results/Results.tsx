import React, { useEffect } from "react";

import  useResultsQuery  from '../../data/useResultsQuery'


export const Results: React.FC  = () => {
    const [results, resultsError, isLoadingResults ] = useResultsQuery()
    console.log(results, resultsError, isLoadingResults )
    const renderResults = () => {
      return <p>{results.results.map((item, i) => {return <p key={i}> the last game {item.wonBy != "draw" ? ` was wonBy ${item.wonBy}` : `was a draw` }</p>})}</p>
    }

    useEffect(() =>{

    },[results])
    return (
      <>
       {renderResults()}
      </>
     
    )

}
