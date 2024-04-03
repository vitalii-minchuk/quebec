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

export interface IStarship {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: number[];
  films: number[];
  created: Date | string;
  edited: Date | string;
  url: string;
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
