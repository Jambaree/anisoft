import { type WpPage } from "@nextwp/core";
// import { Button } from "@/components/Button";
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

  return (
    <>
      <PageHeader2
        text="The latest news, tips, and insights from our team."
        title={page?.title?.rendered}
      />
      <Edges className="my-24">
        <PostsGrid posts={items} />

        <BlogPagination
          className="mt-12"
          currentPage={currentPage}
          nextPage={nextPage}
          prevPage={prevPage}
          totalItems={totalItems}
          totalPages={totalPages}
        />
      </Edges>
    </>
  );
}
