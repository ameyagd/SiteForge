export type TPaginationTemplateKey = "template_1";

export type TPagination = {
  infoText: string;
  currentPage: number;
  totalPageCount: number;
  maxPagesToShow: number;
};

export type TPaginationVariant =
  | "default"
  | "type-1"
  | "type-2"
  | "type-3"
  | "type-4";

export type TPageBaseURL = {
  pageUrl: string;
};
