import type {
  TComponentWithImageSizes,
  TComponentWithTag,
  TImageSizes,
  TRecursivePartial,
} from "@/types";

// prettier-ignore
export type TCardProps = 
  & TComponentWithImageSizes
  & Partial<TComponentWithTag> 
  & {
    size: "sm" | "md" | "lg";
    type: "column" | "row";
    titleText: string;
    url: string;
    descriptionText?: string;
    imgUrl?: string;
    imgType?: "default" | "background";
  };

type TCardElements = {
  cardWrapper: string;
  cardInnerWrapper: string;
  imageWrapper: string;
  image: string;
  contentWrapper: string;
  titleText: string;
  descriptionText: string;
  imageSizes: TImageSizes;
};

export type TCardData = {
  config: TCardProps;
  styleConfig?: TRecursivePartial<TCardElements>;
  loading?: "eager" | "lazy";
};
