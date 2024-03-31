import { ICommonPaginatedResponse, IPeople } from "./types";

export default async function getAllPeopleAction(page?: string) {
  try {
    const requestPage = page ? `/?page=${page}` : "";
    const requestUrl = `${process.env.BASE_URL!}/people${requestPage}`;

    const response = await fetch(requestUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = (await response.json()) as ICommonPaginatedResponse<IPeople[]>;

    return data;
  } catch (error) {
    console.log(error);
  }
}
