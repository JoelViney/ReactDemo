import { useEffect, useState } from 'react';

const PageButtonCount = 7;  // Must be an odd number

function usePagination(pageNumber, recordCount, pageSize) {
    const [totalPages, setTotalPages] = useState(Math.ceil(recordCount / pageSize));
    const [pages, setPages] = useState([]);

    useEffect(() => {
        console.log(`usePagination: pageNumber: ${pageNumber}, recordCount: ${recordCount}, pageSize: ${pageSize}`);
        if (recordCount == null) {
            return;
        }
        const totalPages = Math.ceil(recordCount / pageSize);

        setTotalPages(totalPages);

        let currentPage = pageNumber;
        if (pageNumber > totalPages) {
            currentPage = totalPages;
        }

        // Calculate the visible page numbers start and end
        const halfDisplayPages = Math.floor(PageButtonCount); // So 9 === 4
        const displayPagesSansOne = PageButtonCount - 1;
        
        // Calculate the visible page number start and end
        let loopStart;
        let loopEnd;

        if (currentPage - (halfDisplayPages + 1) <= 0) {
            loopStart = 1;
        } else {
            if (currentPage + halfDisplayPages >= totalPages) {
                if (totalPages - displayPagesSansOne > 0) {
                    loopStart = totalPages - displayPagesSansOne;
                } else {
                    loopStart = 1;
                }
            } else {
                loopStart = currentPage - halfDisplayPages;
            }
        }

        if (loopStart + displayPagesSansOne > totalPages) {
            loopEnd = totalPages;
        } else {
            loopEnd = loopStart + displayPagesSansOne;
        }

        // Adjust the number of page links based on the width of the control
        const list = [];
        for (let i = loopStart; i <= loopEnd; i++) {
            list.push(i);
        }

        setPages(list);

    }, [pageNumber, recordCount, pageSize]);

    return { totalPages, pages };
}
export default usePagination;