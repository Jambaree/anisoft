import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function BlogPagination({
  className,
  currentPage,
  nextPage,
  prevPage,
  totalPages,
  basePath = "/blog",
}: {
  className?: string;
  currentPage: number;
  nextPage: string;
  prevPage: string;
  totalPages: number;
  basePath?: string;
}) {
  const siblingCount = 1; // Adjust this to show more pages around the current page
  const firstPageIndex = 1;
  const lastPageIndex = totalPages;

  const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const paginationRange = (() => {
    const totalPageNumbers = siblingCount + 5; // siblings + firstPage + lastPage + currentPage + 2 ellipses

    if (totalPages > totalPageNumbers) {
      const startPage = Math.max(2, currentPage - siblingCount);
      const endPage = Math.min(totalPages - 1, currentPage + siblingCount);
      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = totalPages - endPage > 1;
      const spillOffset = totalPageNumbers - (pages.length + 1);

      if (hasLeftSpill && !hasRightSpill) {
        const extraPages = range(startPage - spillOffset, startPage - 1);
        pages = [firstPageIndex, ...extraPages, ...pages];
      } else if (!hasLeftSpill && hasRightSpill) {
        const extraPages = range(endPage + 1, endPage + spillOffset);
        pages = [...pages, ...extraPages, lastPageIndex];
      } else {
        pages = [firstPageIndex, ...pages, lastPageIndex];
      }

      return pages;
    }

    return range(1, totalPages);
  })();

  return (
    <Pagination className={className}>
      <PaginationContent>
        {/* Previous Page */}
        <PaginationItem>
          <PaginationPrevious disabled={currentPage === 1} href={prevPage} />
        </PaginationItem>

        {/* Dynamic Pagination */}
        {paginationRange.map((page, index) =>
          page === currentPage ? (
            <PaginationItem key={index}>
              <PaginationLink aria-current="page" href="#">
                {page}
              </PaginationLink>
            </PaginationItem>
          ) : page === 0 ? (
            <PaginationItem key={index}>
              <PaginationEllipsis />
            </PaginationItem>
          ) : (
            <PaginationItem key={index}>
              <PaginationLink href={`${basePath}/${page}`}>
                {page}
              </PaginationLink>
            </PaginationItem>
          )
        )}

        {/* Next Page */}
        <PaginationItem>
          <PaginationNext
            disabled={currentPage === totalPages}
            href={nextPage}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
