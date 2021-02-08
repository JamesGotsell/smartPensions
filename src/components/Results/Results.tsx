import React, { useState } from "react";
import ReactCardFlip from "react-card-flip"
import { GameData } from '../types/types'
interface ResultsProps {
  data: GameData
  isFlipped: boolean
}

export const Results: React.FC<ResultsProps>  = ({data,isFlipped}) => {
    

    const ResultCard = ({data}) => {

        return (
          <div>
            <img height={200} width={200} src='https://www.placecage.com/g/200/300' />
            <p>{data.map((item, i) => {return <p key={i}> the last game {item.wonBy != "draw" ? ` was wonBy ${item.wonBy}` : `was a draw` }</p>})}</p>
          </div>
        )
    }

    return (
      <>
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <img height={200} width={200} src='https://www.placecage.com/g/300/300' />
          <ResultCard data={data}  />
        </ReactCardFlip>
        
      </>
     
    )

}
