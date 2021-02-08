Run

```
  npm install
  npm run dev
  npm run test
```

# FYI issues

- some issues with the swapi api
- i had to get fork the graphql server and use locally
- if you have any issues with connection - cors error
  its a little wierd as i can make a starship query and theres not issues - only a issue for the character query
  - git clone https://github.com/JamesGotsell/swapi-graphql
  - npm install
  - npm start
  - take the localhost server url and had to the url section in index.ts

issues with the graphlq query not returning correct data from the so i could display more data

```
 const [results, resultsError, isLoadingResults ] = useResultsQuery()
  the useResultQuery not returning the data in the winningObject in cache
  const personData = (name, height) => {
    return <><p>with the person: {name}  that had a height of: {height} </p></>
  }
  const starShipData = (model, hyperdriveRating) => {
    return <><p>with the starShip: {model}  that had a hyperdriveRating of: {hyperdriveRating} </p></>
  }
  const renderResults = () => {
   return <>
            <p> the last game {wonBy != "draw" ? ` was wonBy ${wonBy}` : `was a draw` }</p>
             {  winningObject.name &&  personData(winningObject.name, winningObject.height)}
             {  winningObject.model &&  personData(winningObject.model, winningObject.hyperdriveRating)}
          </>
  }

```
