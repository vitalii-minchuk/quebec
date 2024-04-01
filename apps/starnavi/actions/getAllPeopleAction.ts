"use server";

import axios from "axios";
import {
  ICommonPaginatedResponse,
  IGetAllCharactersInput,
  ICharacter,
} from "./types";

export default async function getAllCharactersAction(
  input: IGetAllCharactersInput,
) {
  try {
    const { page, search, episode } = input;

    const requestPage = page ? `/?page=${page}` : "";
    let requestUrl = `${process.env.BASE_URL!}/people${requestPage}`;

    if (search) {
      requestUrl = page
        ? `${requestUrl}&name__contains=${search}`
        : `${requestUrl}/?name__contains=${search}`;
    }

    if (episode) {
      requestUrl =
        page || search
          ? `${requestUrl}&films__in=${episode}`
          : `${requestUrl}/?films__in=${episode}`;
    }

    const { data } =
      await axios.get<ICommonPaginatedResponse<ICharacter[]>>(requestUrl);

    return data;
  } catch (error) {
    console.log(error);
  }
}
