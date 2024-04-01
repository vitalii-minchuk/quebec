import { ICharacter } from "../../../actions/types";
import { getIdFromUrl } from "../../../helpers";
import { AllCharactersTableActionCell } from "./all-characters-table-action-cell";

interface Props {
  people?: ICharacter[];
}

export const AllCharactersTable = (props: Props) => {
  const { people } = props;

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Height</th>
        </tr>
      </thead>
      <tbody>
        {people?.map((el) => (
          <tr key={el.url}>
            <td>{el.name}</td>
            <td>{el.height}</td>
            <AllCharactersTableActionCell id={getIdFromUrl(el.url)} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
