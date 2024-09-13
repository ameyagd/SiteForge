export type TBreadcrumbItem = {
  label: string;
  link?: string;
};

export type TBreadcrumbVariant =
  | "default"
  | "type-1"
  | "type-2"
  | "type-3"
  | "type-4";

export type TBreadcrumbProps = {
  breadcrumbItems: TBreadcrumbItem[];
  breadcrumbVariant: TBreadcrumbVariant;
};
