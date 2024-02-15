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
  const range = (start, end) => {
    const length = end - start + 1;
    return Array.from({ length }, (_, idx) => idx + start);
  };

  const makePaginationRange = () => {
    // Always include the first and last pages if totalPages is more than 1
    if (totalPages <= 1) {
      return range(1, totalPages);
    }

    const paginationRange = [];

    // Define the range of pages to show around the current page
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    // Always include the first page
    paginationRange.push(1);

    // If the current page is more than 2 steps away from the first page, we add ellipsis
    if (currentPage > 3) {
      paginationRange.push("...");
    }

    // Range of pages around the current page
    if (totalPages > 1) {
      for (let page = startPage; page <= endPage; page++) {
        if (page !== 1 && page !== totalPages) {
          paginationRange.push(page);
        }
      }
    }

    // If the current page is more than 2 steps away from the last page, we add ellipsis
    if (currentPage < totalPages - 2) {
      paginationRange.push("...");
    }

    // Always include the last page if totalPages is more than 1
    if (totalPages > 1) {
      paginationRange.push(totalPages);
    }

    return paginationRange;
  };

  const paginationRange = makePaginationRange();

  return (
    <Pagination className={className}>
      <PaginationContent>
        {prevPage ? (
          <PaginationItem>
            <PaginationPrevious href={prevPage} />
          </PaginationItem>
        ) : null}

        {paginationRange.map((page, index) => {
          if (page === "...") {
            return (
              <PaginationItem key={index}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          } else if (page === 1) {
            return (
              <PaginationItem key={index}>
                <PaginationLink href={basePath} isActive={currentPage === page}>
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          }
          return (
            <PaginationItem key={index}>
              <PaginationLink
                href={`${basePath}/${page}`}
                isActive={currentPage === page}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {nextPage ? (
          <PaginationItem>
            <PaginationNext href={nextPage} />
          </PaginationItem>
        ) : null}
      </PaginationContent>
    </Pagination>
  );
}
