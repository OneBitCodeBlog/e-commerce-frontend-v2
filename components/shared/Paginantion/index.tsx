import { useState, useEffect } from 'react';
import Meta from '../../../dtos/Meta';
import StyledButton from '../StyledButton';
import PaginationService from '../../../util/PaginationService';

import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPage } from '../../../store/modules/admin/shared/pagination/reducer';

const Pagination: React.FunctionComponent<Meta> = ({ page, length, total, total_pages }) => {
  const [pagination, setPagination] = useState(['1']);

  const currentPage = useSelector(state => state.pagination.currentPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentPage(page));
  }, [])

  useEffect(() => {
    setPagination(PaginationService.execute(total_pages, page));
  }, [total_pages])

  const handlePageClick = (page: string): void => {
    dispatch(setCurrentPage(Number(page)));
  }

  const handleNextPageClick = (): void => {
    if (page < total_pages) {
      dispatch(setCurrentPage(page + 1));
    }
  }

  const handlePreviusPageClick = (): void => {
    if (currentPage > 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  }

  return (
    <div className="pagination justify-content-end">
      <div className="pagination">
        <StyledButton 
          action="<" 
          type_button="blue"
          onClick={handlePreviusPageClick}
        />

        {
          pagination.map((item, index) => (
            item === '...' ? '...' : (
                <StyledButton 
                  key={index}
                  action={item} 
                  type_button="blue"
                  active={page === Number(item) }
                  onClick={() => handlePageClick(item)}
                />
              )
            ))
        }

        <StyledButton 
          action=">" 
          type_button="blue" 
          onClick={handleNextPageClick}
        />
      </div>
    </div>
  )
}

export default Pagination;