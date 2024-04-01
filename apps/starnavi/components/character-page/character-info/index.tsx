"use client";

import ReactFlow, { Controls } from "reactflow";

import "reactflow/dist/style.css";

import { ICharacter } from "../../../actions/types";
import { BackHomeBtn } from "../back-home-btn";
import { useEffect, useId, useMemo, useState } from "react";

interface Props {
  starships: any;
  character?: ICharacter;
  films: string[];
}

export const CharacterInfo = (props: Props) => {
  const { starships, character, films } = props;

  const [data, setData] = useState<{
    character?: ICharacter;
    films: { episode: string | number; ships?: string[] }[];
  }>({
    character,
    films: [],
  });

  const reactGeneratedId = useId();

  // useEffect(() => {
  //   if (films.length) {
  //       films.forEach((film, i) => {
  //         setInitialNodes(prev => [
  //           ...prev,
  //           {id: String(film + 1),
  //             position: { x: (100 * (1 + i)) + 100 * i, y: 200 },
  //           data: { label: film} }
  //         ])
  //         setInitialEdges(prev => [
  //           ...prev,
  //           {id: reactGeneratedId,
  //         source: '1',
  //       target: `${film + 1}`
  //         }
  //         ])
  //       })
  //     }
  // }, [films])

  // useEffect(() => {
  //   starships?.forEach(episode => {
  // console.log(episode)
  //     episode?.results?.forEach((ship, i) => {
  // setInitialNodes(prev => [
  //   ...prev,
  //   {id: String(film + 1),
  //     position: { x: (100 * (1 + i)) + 100 * i, y: 200 },
  //   data: { label: ship} }
  // ])
  //       console.log(ship)
  //     })
  //   })
  // }, [starships])

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
    let count = 2;
    const initialNodes = [
      {
        id: "1",
        position: { x: 100 * films?.length, y: 50 },
        data: { label: character?.name },
      },
    ];
    const initialEdges: { id: string; source: string; target: string }[] = [];

    data.films.forEach((film, i) => {
      initialNodes.push({
        id: `${count}`,
        position: { x: 100 * (1 + i) + 100 * i, y: 200 },
        data: { label: `${film.episode}` },
      });

      initialEdges.push({
        id: reactGeneratedId,
        source: "1",
        target: `${count}`,
      });

      if (film.starships?.length) {
        film.starships.forEach((ship, j) => {
          initialNodes.push({
            id: `${count + 1 + j}`,
            position: { x: 100 * (1 + i) + 100 * i, y: 400 },
            data: { label: `${ship}` },
          });
        });
        // initialEdges.push(
        //   {id: reactGeneratedId,
        //     source: `${count}`,
        //   target: `${count}`
        //     }
        // )
      }

      if (film.starships?.length) {
        count = count + film?.starships?.length;
      } else {
        count++;
      }
    });

    return {
      initialNodes,
      initialEdges,
    };
  }, [data]);
  console.log(initialData);
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
