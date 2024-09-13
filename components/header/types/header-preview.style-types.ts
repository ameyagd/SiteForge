import type { TRecursivePartial } from "@/types";

type TContainerStyle = {
  outerContainer: string;
  innerContainer: string;
};

type TLogoStyle = {
  logoContainer: string;
  logoLink: string;
  logo: string;
};

type TNavigationStyle = {
  navContainer: string;
  navToggleBtnContainer: string;
  navToggleBtnLogo: string;
  navListContainer: string;
  navListItem: string;
  navLink: string;
  navListItemWithSublist: string;
  navSublistContainer: string;
  navSublistItem: string;
  subNavLink: string;
  phoneNavContainer: string;
  phoneNavContainerChecked: string;
  phoneNavButton: string;
  phoneNavLogo: string;
  phoneList: string;
  phoneListItem: string;
  phoneNavLink: string;
  phoneSubList: string;
  phoneSubListItem: string;
  phoneSubNavLink: string;
};

type TSearchFormStyle = {
  formContainer: string;
  input: string;
  formButton: string;
  formBtnLogo: string;
  toggleBtnContainer: string;
  toggleBtn: string;
  toggleBtnLogo: string;
  phoneBtnContainer: string;
  phoneBtn: string;
  phoneBtnLogo: string;
};

type THeaderStyle = {
  container: TContainerStyle;
  logo: TLogoStyle;
  navigation: TNavigationStyle;
  searchForm: TSearchFormStyle;
};

export type THeaderStyleConfig = TRecursivePartial<THeaderStyle> & {
  id: "default" | string;
};
