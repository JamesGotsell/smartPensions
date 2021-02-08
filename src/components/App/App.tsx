import React  from "react";

import styled from "styled-components"
import { Nav } from '../Nav/Nav'
import { Home } from '../Pages/Home'
import { ResultsPage } from '../Pages/ResultsPage'
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";


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
