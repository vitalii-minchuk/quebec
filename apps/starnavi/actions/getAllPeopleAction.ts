"use server";

import { axiosInstance } from "@/lib/axios";
import {
  ICharacter,
  ICommonPaginatedResponse,
  IGetAllCharactersInput,
} from "./types";

export default async function getAllCharactersAction(
  input: IGetAllCharactersInput,
): Promise<ICommonPaginatedResponse<ICharacter[]> | undefined> {
  try {
    const { page, search, episode } = input;

    const requestUrl = "/people";
    const params = {
      ...(page ? { page } : {}),
      ...(search ? { name__contains: search } : {}),
      ...(episode ? { films__in: episode } : {}),
    };

    const { data } = await axiosInstance.get<
      ICommonPaginatedResponse<ICharacter[]>
    >(requestUrl, { params });

    return data;
  } catch (error) {
    console.log(error);
  }
}
