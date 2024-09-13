import type { TRecursivePartial } from "@/types";

type TContainerStyle = {
  outerContainer: string;
  innerContainer: string;
};

type TAboutUsStyle = {
  container: TContainerStyle;
  imageContainer: string;
  img: string;
  pageText: string;
};

export type TAboutUsStyleConfig = {
  id: "default" | string;
} & TRecursivePartial<TAboutUsStyle>;
