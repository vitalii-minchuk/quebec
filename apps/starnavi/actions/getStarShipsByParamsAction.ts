"use server";

import type {
  ICommonPaginatedResponse,
  IGetStarShipsInput,
  IStarship,
} from "./types";
import { axiosInstance } from "@/lib/axios";

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

    const { data } = await axiosInstance.get<
      ICommonPaginatedResponse<IStarship[]>
    >(requestUrl, { params });

    return data;
  } catch (error) {
    // TODO handle errors properly
    console.log(error);
  }
}
