import type { TRecursivePartial } from "@/types";

type TInnerContainerStyle = {
  mainContainer: string;
  topContainer: string;
  bottomContainer: string;
};

type TContainerStyle = {
  outerContainer: string;
  innerContainer: TInnerContainerStyle;
};

type TLinkGroup = {
  navContainer: string;
  innerContainer: string;
  gridContainer: string;
};

type TLogoStyle = {
  logoContainer: string;
  logoLink: string;
  logo: string;
};

// export type TNavigationStyle = {
//   navContainer: string;
//   navToggleBtnContainer: string;
//   navToggleBtnLogo: string;
//   navListContainer: string;
//   navListItem: string;
//   navLink: string;
//   navListItemWithSublist: string;
//   navSublistContainer: string;
//   navSublistItem: string;
//   subNavLink: string;
// };

type TFooterStyle = {
  container: TContainerStyle;
  logo: TLogoStyle;
  // navigation: TNavigationStyle;
  copyright: string;
  description: string;
  disclaimer: string;
  linkGroup: TLinkGroup;
};

export type TFooterStyleConfig = TRecursivePartial<TFooterStyle> & {
  id: string;
};
