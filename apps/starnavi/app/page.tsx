import { Suspense } from "react";
import getAllPeopleAction from "../actions/getAllPeopleAction";
import { AllPeopleTable } from "../components/home-page/all-people-table";
import { EAppSearchParams } from "../enums";

interface Props {
  searchParams: Record<string, string>;
}
export default async function HomePage(props: Props) {
  const { searchParams } = props;

  const currentPage = searchParams?.[EAppSearchParams.PAGE];

  const peopleData = await getAllPeopleAction(currentPage);

  return (
    <main>
      <AllPeopleTable people={peopleData} />
    </main>
  );
}
