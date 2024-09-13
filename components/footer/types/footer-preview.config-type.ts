import type {
  LinkGroupItem,
  TColorConfig,
  TConfigKeyAndId,
  TDevice,
} from "@/types";

export type TFooterLogo = {
  logoSvg: string;
  openInNewTab?: boolean;
};

export type TSection = {
  text: string;
  deviceConfig: Required<TDevice<boolean>>;
};

export type TFooterSection = {
  description: TSection;
  disclaimer: TSection;
};

// prettier-ignore
export type TFooterConfig = {
  logo: TFooterLogo;
  tabs: LinkGroupItem[];
  copyright: string;
  colorConfig: Pick<TColorConfig, "color" | "background">;
} & Partial<TFooterSection>
  & TConfigKeyAndId<TFooterTemplateId>

type TFooterTemplateId = "template_1" | "template_2" | "template_3";
