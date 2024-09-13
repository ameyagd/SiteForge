export type TTextColorConfig = {
  /**
   * @description For title text
   */
  primary: string;
  /**
   * @description For body text
   */
  secondary: string;
  link: string;
  /**
   * @description For card tags
   */
  tag: string;
};

export type TThemeColorConfig = {
  id: string;
  name: string;
  lightTextColors: TTextColorConfig;
  darkTextColors: TTextColorConfig;
  backgroundColors: string[];
};

export type TThemeColors = {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  backgroundColor: string;
};

export type TColorState = {
  presetIndex: number;
  themeList: TThemeColors[];
};

export type TLayoutState = {
  maxWidth: number;
  appHorizontalPadding: number;
};

export type THeadingLayout = "single-line" | "multi-line";
