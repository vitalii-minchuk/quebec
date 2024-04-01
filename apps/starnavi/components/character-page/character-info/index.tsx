"use client";

import ReactFlow, { Controls, Edge } from "reactflow";

import "reactflow/dist/style.css";

import { ICharacter } from "../../../actions/types";
import { BackHomeBtn } from "../back-home-btn";
import { useEffect, useMemo, useState } from "react";

interface Props {
  starships: { results: { name: string }[] }[];
  character?: ICharacter;
  films: string[];
}

export const CharacterInfo = (props: Props) => {
  const { starships, character, films } = props;

  const [data, setData] = useState<{
    character?: ICharacter;
    films: { episode: string | number; starships?: string[] }[];
  }>({
    character,
    films: [],
  });

  useEffect(() => {
    setData((prev) => ({
      ...prev,
      films: films?.map((el, i) => ({
        episode: el,
        starships: starships[i]?.results?.map((ship) => ship.name),
      })),
    }));
  }, [films, starships]);

  const initialData = useMemo(() => {
    let filmsIdsCount = 2;
    let starshipsIdsCount = films.length + filmsIdsCount;

    const initialNodes = [
      {
        id: "1",
        position: { x: 100 * films?.length, y: 50 },
        data: { label: character?.name },
      },
    ];
    const initialEdges: Edge<{ id: string; source: string; target: string }>[] =
      [];

    data.films.forEach((film, i) => {
      initialNodes.push({
        id: `${filmsIdsCount}`,
        position: { x: 100 * (1 + i) + 100 * i, y: 200 },
        data: { label: `Episode ${film.episode}` },
      });

      initialEdges.push({
        id: `e1-${filmsIdsCount}`,
        source: "1",
        target: `${filmsIdsCount}`,
      });

      if (film?.starships?.length) {
        film.starships.forEach((ship) => {
          initialNodes.push({
            id: `${starshipsIdsCount}`,
            position: {
              x:
                100 * (starshipsIdsCount - films.length - 1) +
                100 * (starshipsIdsCount - films.length - 2),
              y: 400,
            },
            data: { label: `${ship}` },
          });
          initialEdges.push({
            id: `e${filmsIdsCount}-${starshipsIdsCount}`,
            source: `${filmsIdsCount}`,
            target: `${starshipsIdsCount}`,
          });

          starshipsIdsCount++;
        });
      }
      filmsIdsCount++;
    });

    return {
      initialNodes,
      initialEdges,
    };
  }, [data]);

  return (
    <div className="w-screen h-screen">
      <BackHomeBtn />
      <ReactFlow
        nodes={initialData.initialNodes}
        edges={initialData.initialEdges}
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};
