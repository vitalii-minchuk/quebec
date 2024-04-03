"use server";

import type {
  ICharacter,
  ICommonPaginatedResponse,
  IGetAllCharactersInput,
} from "./types";
import { axiosInstance } from "@/lib/axios";

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
    // TODO handle errors properly
    console.log(error);
  }
}
