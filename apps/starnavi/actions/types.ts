export interface ICommonPaginatedResponse<T> {
  count: number;
  results: T;
}

export interface IPeople {
  birth_year: string;
  eye_color: string;
  films: string;
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

export interface IGetAllPeopleInput {
  page?: string;
  search?: string;
  episode?: string;
}
