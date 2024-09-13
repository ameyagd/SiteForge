export function getStartingIndex(
  currentPage: number,
  maxPagesToShow: number,
  totalPageCount: number
) {
  return currentPage >= maxPagesToShow
    ? currentPage >= totalPageCount
      ? currentPage - maxPagesToShow
      : currentPage - maxPagesToShow + 1
    : 0;
}

export function getPageNumberList(
  startingIndex: number,
  maxPagesToShow: number,
  totalPageCount: number
) {
  return Array.from(
    {
      length: Math.min(maxPagesToShow, totalPageCount),
    },
    (_, i) => ({
      pageNumber: i + startingIndex + 1,
      pageKey: crypto.randomUUID(),
    })
  );
}
