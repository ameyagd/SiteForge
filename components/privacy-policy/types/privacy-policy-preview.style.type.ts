import type { TRecursivePartial } from "@/types";

type TContainerStyle = {
  outerContainer: string;
  innerContainer: string;
};

type TPrivacyPolicyStyle = {
  container: TContainerStyle;
  imageContainer: string;
  img: string;
  pageText: string;
};

export type TPrivacyPolicyStyleConfig = {
  id: "default" | string;
} & TRecursivePartial<TPrivacyPolicyStyle>;
