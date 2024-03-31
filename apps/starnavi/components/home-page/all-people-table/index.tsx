import { IPeople } from "../../../actions/types";
import { getIdFromUrl } from "../../../helpers";
import { AllPeopleTableActionCell } from "./all-people-table-action-cell";

interface Props {
  people?: IPeople[];
}

export const AllPeopleTable = (props: Props) => {
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
            <AllPeopleTableActionCell id={getIdFromUrl(el.url)} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
