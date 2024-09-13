import type { TRecursivePartial } from "@/types";

type TContainerStyle = {
  outerContainer: string;
  innerContainer: string;
};

type TEmailCaptureStyle = {
  container: TContainerStyle;
  emailCaptureContainer: string;
  emailAddressInput: string;
  subscribeBtn: string;
};

export type TEmailCaptureStyleConfig = {
  id: "default" | string;
} & TRecursivePartial<TEmailCaptureStyle>;
