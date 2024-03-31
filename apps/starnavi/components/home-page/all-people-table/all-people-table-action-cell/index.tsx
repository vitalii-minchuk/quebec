import Link from "next/link";

interface Props {
  id?: string;
}

export const AllPeopleTableActionCell = (props: Props) => {
  const { id } = props;

  return <td>{id && <Link href={id}>View Details</Link>}</td>;
};
