"use server";

import axios from "axios";

import { ICharacter } from "./types";

export default async function getCharacterByIdAction(id: string) {
  try {
    const requestUrl = `${process.env.BASE_URL!}/people/${id}/`;

    const { data } = await axios.get<ICharacter>(requestUrl);

    return data;
  } catch (error) {
    console.log(error);
  }
}
