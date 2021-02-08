import React, { useEffect, useState } from "react";

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
export const Home: React.FunctionComponent = () => {
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
        buttonTitle: "Choose game ",
        toggle: false
    });
 
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


   const playGame = () => {
       if(toggleValue.toggle){
        const stuff = getRandomItem(peoplesIds)
        setGameData(stuff)
     }else {
         const stuff = getRandomItem(shipIds)
         setGameData(stuff)
     }
   }
   

   useEffect(() => {
        console.log(data?.allPeople.edges, StarShipIDs?.allStarships.edges)
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

        <Button onClick={() => setTogglValue({
                buttonTitle: "change game",
                toggle: !toggleValue.toggle
            })}>
            {toggleValue.buttonTitle}
        </Button>
        <Button onClick={playGame}>Play</Button>
            <StarWarsTopTrumpsWrapper 
                gameTitle={toggleValue.toggle ? "Character game" : "Ship game"}
                characterGame={gameData?.characterGame} 
                player1Selection={gameData.player1Selection || ""} 
                computerSelection={gameData.computerSelection || ''} />
      
    </>
)


};
