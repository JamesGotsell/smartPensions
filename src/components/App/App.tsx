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

  import GlobalStyle from '../../lib/global';

export const App: React.FunctionComponent = () => {
    const Wrapper = styled.section`
            padding: 4em;
            background: #111111;
            min-height: 100vh;
    `;

    const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: #ffffff;
        font-family: "museo", Helvetica Neue, Helvetica, sans-serif;
    `;



return (
    <>  

        <Wrapper>
        <GlobalStyle/>
        <Title>STARWARS TOP TRUMPS</Title>
            <Router>
                <Nav/>
                <Switch>
                    <Route path="/results" component={ResultsPage} />
                    <Route exact path="/" component={Home} />
                </Switch>
            </Router>
        </Wrapper>
  
    </>
)


};
