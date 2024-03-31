interface Props {
  people: any;
}

export const AllPeopleTable = (props: Props) => {
  const { people } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Tags</th>
          <th>Countries</th>
        </tr>
      </thead>
      <tbody>
        {people?.results?.map((el) => (
          <tr key={el.url}>
            <td>{el.name}</td>
            <td>{el.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
