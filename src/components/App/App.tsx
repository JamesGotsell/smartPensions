import React, { useEffect, useState } from "react";
import useAllPeopleQuery from "../../data/useAllPeopleQuery";

import useAllStarShipQuery from "../../data/useAllStarShipQuery";
import { getRamdomValue } from '../../lib/utils'

import styled from "styled-components"
import {Nav} from '../Nav/Nav'
import {Home} from '../Pages/Home'
import {ResultsPage} from '../Pages/ResultsPage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

interface gameData {
    player1Selection: string;
    computerSelection: string;
    characterGame: boolean;
}
export const App: React.FunctionComponent = () => {
    const Wrapper = styled.section`
            padding: 4em;
            background: papayawhip;
            height:100%;
    `;

    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
        font-family: "museo", Helvetica Neue, Helvetica, sans-serif;
    `;



return (
    <>  
        {/* get the  results from local state then display*/}
        <Wrapper>
              
                <Title>STARWARS TOP TRUMPS</Title>
            <Router>
                    <Nav/>
                        <Switch>
                            <Route path="/results">
                                <ResultsPage/>
                            </Route>
                        
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
            </Router>
        </Wrapper>
    </>
)


};
