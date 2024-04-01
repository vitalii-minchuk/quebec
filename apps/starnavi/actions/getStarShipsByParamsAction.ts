"use server";

import axios from "axios";
import { IGetStarShipsInput } from "./types";

export default async function getStarShipsByParamsAction(
  input: IGetStarShipsInput,
) {
  try {
    const { pilot, film } = input;

    let requestUrl = `${process.env.NEXT_PUBLIC_BASE_URL!}/starships`;

    if (film) {
      requestUrl = `${requestUrl}/?films__in=${film}`;
    }

    if (pilot) {
      requestUrl = film
        ? `${requestUrl}&pilots__in=${pilot}`
        : `${requestUrl}/?pilots__in=${pilot}`;
    }

    const { data } = await axios.get<any>(requestUrl);

    return data;
  } catch (error) {
    console.log(error);
  }
}
