export interface AllData {
  id?: number,
  model?: string,
  passengers?: string,
  costInCredits?: number,
  starshipClass?: string,
  maxAtmospheringSpeed?: number,
  hyperdriveRating?: number
  name?: string
  height?: number,
  birthYear?: string,
  gender?: string
}

export interface gameData {
  player1Selection: string;
  computerSelection: string;
  characterGame: boolean;
}

export interface GameData {
  gameNumber: number;
  wonBy: string; // either computer or  player one
  winningObject?: AllData;
  __typename?: string
}