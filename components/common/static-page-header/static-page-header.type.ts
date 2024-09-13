export type TStaticPageHeaderVariant = {
  variant: "default" | "type-1" | "type-2" | "type-3";
};

type TAlignment = "left" | "center" | "right";

type _TContentAlignment = {
  horizontalAlignment: TAlignment;
  verticalAlignment: TAlignment;
};

export type TContentAlignment = Partial<_TContentAlignment>;
