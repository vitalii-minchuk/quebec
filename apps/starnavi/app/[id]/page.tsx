interface Props {
  params: { id: string };
  searchParams?: Record<string, string>;
}

export default async function CharacterPage(props: Props) {
  const { params } = props;
  return <div>{params.id}</div>;
}
