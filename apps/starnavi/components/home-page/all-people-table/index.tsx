import { IPeople } from "../../../actions/types";

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
          </tr>
        ))}
      </tbody>
    </table>
  );
};
