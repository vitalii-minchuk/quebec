"use server";

import type { ICharacter } from "./types";
import { axiosInstance } from "@/lib/axios";

export default async function getCharacterByIdAction(id: string) {
  try {
    const requestUrl = `/people/${id}/`;

    const { data } = await axiosInstance.get<ICharacter>(requestUrl);

    return data;
  } catch (error) {
    // TODO handle errors properly
    console.log(error);
  }
}
