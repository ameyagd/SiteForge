import type { TImageSizes, TRecursivePartial } from "@/types";

type TContainerStyle = {
  section: string;
  container: string;
  innerContainer: string;
};

type TContentStyle = {
  container: string;
  tag: string;
  heading: string;
  description: string;
  redirectLink: string;
};

type THeroImage = {
  container: string;
  image: string;
  imageSizes: TImageSizes;
};

type THeroStyle = {
  container: TContainerStyle;
  content: TContentStyle;
  imageStyle: THeroImage;
};

export type THeroStyleConfig = {
  id: "default" | string;
} & TRecursivePartial<THeroStyle>;
