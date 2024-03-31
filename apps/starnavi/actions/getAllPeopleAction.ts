import axios from "axios";
import { ICommonPaginatedResponse, IGetAllPeopleInput, IPeople } from "./types";

export default async function getAllPeopleAction(input: IGetAllPeopleInput) {
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
      await axios.get<ICommonPaginatedResponse<IPeople[]>>(requestUrl);

    return data;
  } catch (error) {
    console.log(error);
  }
}
