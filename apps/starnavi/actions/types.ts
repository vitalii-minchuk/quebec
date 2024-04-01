export interface ICommonPaginatedResponse<T> {
  count: number;
  results: T;
}

export interface ICharacter {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: number;
  mass: string;
  name: string;
  skin_color: string;
  created: Date | string;
  edited: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

export interface IGetAllCharactersInput {
  page?: string;
  search?: string;
  episode?: string;
}

export interface IGetStarShipsInput {
  film?: string;
  pilot?: string;
}
