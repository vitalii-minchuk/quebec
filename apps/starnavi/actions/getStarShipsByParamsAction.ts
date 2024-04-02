"use server";

import { axiosInstance } from "@/lib/axios";
import { IGetStarShipsInput } from "./types";

export default async function getStarShipsByParamsAction(
  input: IGetStarShipsInput,
) {
  try {
    const { pilot, film } = input;
    const requestUrl = "/starships";

    const params = {
      ...(pilot ? { pilots__in: pilot } : {}),
      ...(film ? { films__in: film } : {}),
    };

    const { data } = await axiosInstance.get<any>(requestUrl, { params });

    return data;
  } catch (error) {
    console.log(error);
  }
}
