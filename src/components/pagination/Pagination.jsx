import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

const ITEMS_PER_PAGE = 10;

function Pagination({ setSkip, page, setSearchParams }) {
  const { total } = useSelector((state) => state.todos.items);
  const pageCount = Math.ceil(total / ITEMS_PER_PAGE);

  const handlePageClick = (value) => {
    setSkip(value.selected * ITEMS_PER_PAGE);
  };

  const handlePage = (value) => {
    if (value.nextSelectedPage >= 0) {
      setSearchParams({ page: value.nextSelectedPage + 1 });
    }
  };

  return (
    <div className={css["container-pagination"]}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        previousLabel="< "
        initialPage={page - 1}
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
}

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  setSkip: PropTypes.func.isRequired,
  setSearchParams: PropTypes.func.isRequired,
};

export default Pagination;
