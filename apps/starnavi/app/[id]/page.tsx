import { Metadata } from "next";

import getCharacterByIdAction from "../../actions/getCharacterByIdAction";
import getStarShipsByParamsAction from "../../actions/getStarShipsByParamsAction";
import { CharacterInfo } from "../../components/character-page/character-info";

interface Props {
  params: { id: string };
  searchParams?: Record<string, string>;
}

export async function generateMetadata(props: Props): Promise<Metadata> {
  const { params } = props;
  const characterData = await getCharacterByIdAction(params.id);

  return { title: characterData?.name ?? "" };
}

export default async function CharacterPage(props: Props) {
  const { params } = props;

  const characterData = await getCharacterByIdAction(params.id);

  const films = characterData?.films ? characterData.films : [];
  const starshipsData = await Promise.all(
    films.map((film) => getStarShipsByParamsAction({ film, pilot: params.id })),
  );

  return (
    <main>
      <CharacterInfo
        character={characterData}
        films={films}
        starships={starshipsData}
      />
    </main>
  );
}
