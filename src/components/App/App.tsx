import React, { useEffect, useMemo, useState } from "react";
import { StarWarsTopTrumpsWrapper } from "../StarWarsTopTrumpsWrapper/StarWarsTopTrumpsWrapper";
import useAllPeopleQuery from "../../data/useAllPeopleQuery";
import useAllStarShipQuery from "../../data/useAllStarShipQuery";
import { getRamdomValue } from '../../lib/utils'

import styled from "styled-components"

interface gameData {
    player1Selection: string;
    computerSelection: string;
    characterGame: boolean;
}
export const App: React.FunctionComponent = () => {
    const [data, error, isLoading] = useAllPeopleQuery();
    
    const [StarShipIDs, errorStarShipIDs, isLoadingStarShipIDs] = useAllStarShipQuery();
    console.log(data, "person ids")
    console.log(StarShipIDs, "person ids")

    const [peoplesIds, setPeopleId] = useState<string[]>([])

    const [shipIds, setShipId] = useState<string[]>([])

    const [gameData, setGameData] = useState<gameData>({
        player1Selection: "",
        computerSelection: "",
        characterGame: true
    })

    const [toggleValue, setTogglValue] = useState({
        buttonTitle: "change data",
        toggle: false
    });
 
    const Wrapper = styled.section`
            padding: 4em;
            background: papayawhip;
            height:100vh;
    `;

    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
        font-family: "museo", Helvetica Neue, Helvetica, sans-serif;
    `;

    const Button = styled.button`
        padding: 20px;
    `

    const getRandomItem = (array: string[]):  gameData  => {
        // take the array of ids 
        // call the  getRamdomValue function 
        // set gameData object 
        // return gateDAta object
        const data: gameData = {
            player1Selection: getRamdomValue(array),
            computerSelection: getRamdomValue(array),
            characterGame: toggleValue.toggle
        } 
        return data
    }
    const extractData = (array): string[] => {
       return array.map((item) => {return item.node.id})
    }

   
   const changeGameData = () => {
    setTogglValue({
        buttonTitle: toggleValue.toggle ? "Char game": "Ship game",
        toggle: !toggleValue.toggle
    })
    if(toggleValue.toggle){
       const stuff = getRandomItem(peoplesIds)
       setGameData(stuff)
    }else {
        const stuff = getRandomItem(shipIds)
        setGameData(stuff)
    }
    
   }

   useEffect(() => {
        if(!isLoading) {
            const charId = extractData(data?.allPeople.edges)
            setPeopleId(charId)
        }
        if(!isLoadingStarShipIDs) {
            const shipIDs =  extractData(StarShipIDs?.allStarships.edges)
            setShipId(shipIDs)
        }
     
   }, [data?.allPeople.edges, StarShipIDs?.allStarships.edges])

return (
    <>  
        {/* i need a button that chooses between either person or starship -done */}
        {/* need merge all ids in to array then chose a random ids from the array - done*/} 
        {/* need a computer selection and player 1 */} 
        {/* compare values - compare winner win for obj 1 or 2 or drwa  */}
        {/* add results to local state - wi */}
        {/* using react router to route to results page */}
        {/* get the  results from local state then display*/}
        <Wrapper>
        <Title>STARWARS TOP TRUMPS</Title>
        <Button onClick={changeGameData}>{toggleValue.buttonTitle}</Button>
            <StarWarsTopTrumpsWrapper 
                characterGame={gameData?.characterGame || false} 
                player1Selection={gameData.player1Selection || ""} 
                computerSelection={gameData.computerSelection || ''} />
        </Wrapper>
    </>
)


};
