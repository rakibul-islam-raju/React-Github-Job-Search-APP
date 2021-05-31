import React from 'react';

function JobsPagination({ page, setPage, hasNextPage }) {
    function adjustPage(amount) {
        setPage((prevPage) => prevPage + amount);
    }

    const prevPageMarkup = (
        <li className="page-item">
            <button
                type="button"
                onClick={() => adjustPage(-1)}
                className="page-link"
                aria-label="Previous"
            >
                <span aria-hidden="true">&laquo;</span>
            </button>
        </li>
    );

    const nextPageMarkup = (
        <li className="page-item">
            <button
                onClick={() => adjustPage(1)}
                type="button"
                className="page-link"
                aria-label="Next"
            >
                <span aria-hidden="true">&raquo;</span>
            </button>
        </li>
    );

    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    {/* previous page */}
                    {page > 1 && prevPageMarkup}
                    {page > 1 && (
                        <li className="page-item">
                            <button
                                onClick={() => adjustPage(-1)}
                                className="page-link"
                                type="button"
                            >
                                {page - 1}
                            </button>
                        </li>
                    )}
                    {/* current page */}
                    <li className="page-item active">
                        <button className="page-link" type="button">
                            {page}
                        </button>
                    </li>
                    {hasNextPage && (
                        <li className="page-item">
                            <button
                                onClick={() => adjustPage(1)}
                                className="page-link"
                                type="button"
                            >
                                {page + 1}
                            </button>
                        </li>
                    )}
                    {hasNextPage && nextPageMarkup}
                </ul>
            </nav>
        </div>
    );
}

export default JobsPagination;
