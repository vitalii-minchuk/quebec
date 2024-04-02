import { ICharacter } from "../../../actions/types";
import { getIdFromUrl } from "../../../helpers";
import { AllCharactersTableActionCell } from "./all-characters-table-action-cell";

interface Props {
  people?: ICharacter[];
}

export const AllCharactersTable = (props: Props) => {
  const { people } = props;

  return (
    <div className="flex justify-center">
    <table>
      <thead>
        <tr>
          <th className="px-2 text-start">Name</th>
          <th className="px-2 text-start">Height</th>
          <th className="px-2 text-start">Mass</th>
          <th className="px-2 text-start">Eye color</th>
          <th className="px-2 text-start">Hair color</th>
          <th className="px-2 text-start">Skin color</th>
          <th className="px-2 text-start">Action</th>
        </tr>
      </thead>
      <tbody>
        {people?.map((el) => (
          <tr key={el.url}>
            <td className="p-2 text-start">{el.name}</td>
            <td className="p-2 text-start">{el.height}</td>
            <td className="p-2 text-start">{el.mass}</td>
            <td className="p-2 text-start">{el.eye_color}</td>
            <td className="p-2 text-start">{el.hair_color}</td>
            <td className="p-2 text-start">{el.skin_color}</td>
            <AllCharactersTableActionCell id={getIdFromUrl(el.url)} />
          </tr>
        ))}
      </tbody>
    </table>
        </div>
  );
};
