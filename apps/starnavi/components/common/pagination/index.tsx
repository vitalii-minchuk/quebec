"use client";

import ReactPaginate from "react-paginate";

import { useCustomSearchParams } from "@/hooks";
import { EAppSearchParams } from "@/enums";

import "./styles.css";

interface Props {
  pages?: number;
  currentPage?: string | number;
}

export const Pagination = (props: Props) => {
  const { pages, currentPage = 1 } = props;

  const { addQueryParams, removeQueryParams } = useCustomSearchParams();

  const handlePageChange = ({ selected }: { selected: number }) => {
    const page = selected + 1;
    if (page === 1) {
      removeQueryParams([EAppSearchParams.PAGE]);
      return;
    }
    addQueryParams([{ key: EAppSearchParams.PAGE, value: page.toString() }]);
  };

  const isFirstPage = Number(currentPage) === 1;
  const initialPage = Number(currentPage) - 1;
  const isLastPage = Number(currentPage) === pages;

  return (
    <div key={currentPage} className="py-4 flex justify-center">
      <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageChange}
        pageRangeDisplayed={2}
        pageCount={pages ?? 1}
        initialPage={initialPage}
        previousLabel={"<"}
        nextLabel={">"}
        containerClassName={"pagination"}
        pageLinkClassName={"pagination-page-number"}
        previousLinkClassName={`pagination-page-number ${isFirstPage ? "pagination-disabled" : ""}`}
        nextLinkClassName={`pagination-page-number ${isLastPage ? "pagination-disabled" : ""}`}
        activeLinkClassName={"pagination-active"}
        breakClassName={"break-class"}
      />
    </div>
  );
};
