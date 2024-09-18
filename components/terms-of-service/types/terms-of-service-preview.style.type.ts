import type { TRecursivePartial } from "@/types";

type TContainerStyle = {
  outerContainer: string;
  innerContainer: string;
};

type TTermsOfServiceStyle = {
  container: TContainerStyle;
  imageContainer: string;
  img: string;
  pageText: string;
};

export type TTermsOfServiceStyleConfig = {
  id: "default" | string;
} & TRecursivePartial<TTermsOfServiceStyle>;
