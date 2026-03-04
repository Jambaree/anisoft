import { type WpPage } from "@nextwp/core";
import Edges from "@/components/Edges";
import PageHeader2 from "@/components/PageHeader2";
import { PostsGrid } from "@/components/blog/posts-grid";
import { BlogPagination } from "@/components/blog/blog-pagination";

export function PostArchive(props: {
  data: {
    items?: WpPage[];
    page?: WpPage;
    prevPage?: string;
    nextPage?: string;
    totalItems?: number;
    totalPages?: number;
    currentPage?: number;
  };
}) {
  const {
    data: {
      items,
      page,
      prevPage,
      nextPage,
      totalItems,
      totalPages,
      currentPage,
    },
  } = props;

  // On page 1, sort sticky (pinned) posts to the top
  const sortedItems =
    currentPage === 1 && items
      ? [...items].sort((a, b) => {
          const aSticky = (a as any).sticky ? 1 : 0;
          const bSticky = (b as any).sticky ? 1 : 0;
          return bSticky - aSticky;
        })
      : items;

  return (
    <>
      <PageHeader2 title={page?.title?.rendered} />
      <Edges className="my-24">
        <PostsGrid posts={sortedItems} />

        {currentPage && totalPages && totalItems ? (
          <BlogPagination
            className="mt-12"
            currentPage={currentPage}
            nextPage={nextPage}
            prevPage={prevPage}
            totalItems={totalItems}
            totalPages={totalPages}
          />
        ) : null}
      </Edges>
    </>
  );
}
