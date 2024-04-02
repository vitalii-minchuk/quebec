import Link from "next/link";

interface Props {
  id?: string;
}

export const AllCharactersTableActionCell = (props: Props) => {
  const { id } = props;

  return (
    <td>
      {id && (
        <Link href={id} className=" hover:text-blue-500">
          View Details
        </Link>
      )}
    </td>
  );
};
