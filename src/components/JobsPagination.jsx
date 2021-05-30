import React from 'react'

function JobsPagination({ page, setPage, hasNextPage }) {
    function adjustPage(amount) {
        setPage(prevPage => prevPage + amount)
    }

    const prevPageMarkup = (
        <li class="page-item">
            <button type="button" onClick={() => adjustPage(-1)} class="page-link" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </button>
        </li>
    )

    const nextPageMarkup = (
        <li class="page-item">
            <button onClick={() => adjustPage(1)} type="button" class="page-link"  aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </button>
        </li>
    )

    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    {/* previous page */}
                    { page > 1 && prevPageMarkup }
                    {page > 1 && <li class="page-item"><button onClick={() => adjustPage(-1)} class="page-link" type="button">{page -1}</button></li> }
                    {/* current page */}
                    <li class="page-item active"><button class="page-link" type="button">{page}</button></li>
                    { hasNextPage && <li class="page-item"><button onClick={() => adjustPage(1)} class="page-link" type="button">{page + 1}</button></li> }
                    { hasNextPage && nextPageMarkup }
                </ul>
            </nav>
        </div>
    )
}

export default JobsPagination
