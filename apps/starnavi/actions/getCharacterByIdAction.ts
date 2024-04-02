"use server";

import { ICharacter } from "./types";
import { axiosInstance } from "@/lib/axios";

export default async function getCharacterByIdAction(id: string) {
  try {
    const requestUrl = `/people/${id}/`;

    const { data } = await axiosInstance.get<ICharacter>(requestUrl);

    return data;
  } catch (error) {
    console.log(error);
  }
}
