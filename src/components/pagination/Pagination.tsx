import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

const ITEMS_PER_PAGE = 10;

interface PaginationProps {
  setSkip: (skip: number) => void;
  page: number;
  setParams: (params: { page: any }) => void; // тут any по тому что  setParams ожидает string | string[]
}

const Pagination: FC<PaginationProps> = ({ setSkip, page, setParams }) => {
  const total = useSelector((state: RootState) => state.total);
  const pageCount = Math.ceil(total / ITEMS_PER_PAGE);

  const handlePageClick = (value: { selected: number }) => {
    setSkip(value.selected * ITEMS_PER_PAGE);
  };

  const handlePage = (value: { selected: number }) => {
    if (value.selected >= 0) {
      setParams({ page: value.selected + 1 });
    }
  };

  return (
    <div className={css["container-pagination"]}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        previousLabel="< "
        initialPage={Math.max(page - 1, 0)}
        onPageChange={handlePageClick}
        onClick={handlePage}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
    </div>
  );
};

export default Pagination;
