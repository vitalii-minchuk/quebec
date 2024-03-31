import getAllPeopleAction from "../actions/getAllPeopleAction";
import { AllPeopleTable } from "../components/home-page/all-people-table";
import { AllPeopleSearchFilter } from "../components/home-page/all-people-search-filter";
import { EAppSearchParams } from "../enums";
import { Pagination } from "../components/common/pagination";
import { DEFAULT_NUMBER_OF_ITEMS_PER_PAGE } from "../constants";

interface Props {
  searchParams?: Record<string, string>;
}

export default async function HomePage(props: Props) {
  const { searchParams } = props;

  const currentPage = searchParams?.[EAppSearchParams.PAGE];
  const currentSearch = searchParams?.[EAppSearchParams.SEARCH];
  const currentEpisode = searchParams?.[EAppSearchParams.EPISODE];

  const peopleData = await getAllPeopleAction({
    page: currentPage,
    search: currentSearch,
    episode: currentEpisode,
  });
  const pages = peopleData?.count
    ? Math.ceil(peopleData.count / DEFAULT_NUMBER_OF_ITEMS_PER_PAGE)
    : undefined;

  return (
    <main>
      <AllPeopleSearchFilter searchParams={searchParams} />
      <AllPeopleTable people={peopleData?.results} />
      <Pagination currentPage={currentPage} pages={pages} />
    </main>
  );
}
