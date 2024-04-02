import getAllPeopleAction from "@/actions/getAllPeopleAction";
import { EAppSearchParams } from "@/enums";
import { DEFAULT_NUMBER_OF_ITEMS_PER_PAGE } from "@/constants";
import { Header } from "@/components/layouts/header";
import { Pagination } from "@/components/common/pagination";
import { AllCharactersSearchFilter } from "@/components/home-page/all-characters-search-filter";
import { AllCharactersTable } from "@/components/home-page/all-characters-table";

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
    <>
      <Header />
      <main className="container">
        <AllCharactersSearchFilter searchParams={searchParams} />
        <AllCharactersTable people={peopleData?.results} />
        <Pagination currentPage={currentPage} pages={pages} />
      </main>
    </>
  );
}
