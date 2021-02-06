import React from "react"


interface AllData {
  id?: number,
  model?: string,
  hyperdriveRating?: number
  name?: string
  height?: number,
  birthYear?: string,
  gender?: string
}

 
interface CardProps {
    firstSelection?: AllData
    secondSelection?: AllData
 }
 
export const Card: React.FC<CardProps> = ({firstSelection, secondSelection}) => {
  const {
    model,
    hyperdriveRating,
    name,
    height,
    birthYear,
    gender,
  } = firstSelection
  const {
    model: secondSelectionModel,
    hyperdriveRating: secondSelectionHyperdriveRating,
    name: secondSelectionName,
    height: secondSelectionHeight,
    birthYear: secondSelectionBirthYear,
    gender: secondSelectionGender ,
  } = secondSelection

  const parseData = (data) => {
    let  headingWithData = ''
    let key2 = Object.keys(secondSelection).find(key => secondSelection[key] === data);
    let key1 = Object.keys(firstSelection).find(key => firstSelection[key] === data);

    if (key1) {
      headingWithData = `${key1}: ${data}`
     
    }else if(key2) {
      headingWithData = `${key2}: ${data}`
    }
    return ( <p>{headingWithData}</p>)
  }

  const Card = ({title, hyperdriveRating, height, name,  model, gender }) => {
    
    return (
    <div>
    <h2>{title}</h2>
  
      <p>{parseData(height || hyperdriveRating)}</p>
      <p>{parseData(name || model)} </p>
      <p>{birthYear ? parseData(birthYear) : null}</p>
      <p>{gender ? parseData(gender) : null}</p>
    </div>
    )
  }
return (
  <>
  { 
  (firstSelection && secondSelection) &&  
    <>
        <Card title={model || name} 
              hyperdriveRating={hyperdriveRating}
              height={height} 
              model={model}
              name={name}
              gender={gender} 
        />
        <Card title={secondSelectionName || secondSelectionModel}
              hyperdriveRating={secondSelectionHyperdriveRating}
              height={secondSelectionHeight} 
              name={secondSelectionName}
              model={secondSelectionModel} 
              gender={secondSelectionGender} 
          />
        </>
        
    }
  </>
);
};
