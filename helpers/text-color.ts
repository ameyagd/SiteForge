import type { TSectionItem } from "@/types";

import { colord } from "colord";

export function setSectionTextColor(
  section: TSectionItem,
  backgroundColor: string
) {
  const { config } = section.data;
  (config as any).textColor = getTextColor(section.showBg, backgroundColor);
}

export function getTextColor(showBg: boolean, sectionBgColor: string) {
  if (!showBg) return "#000";
  return colord(sectionBgColor).isDark() ? "#fff" : "#000";
}

export function getRawHSLColor(color: string) {
  const hsl = colord(color).toHsl();
  return `${hsl.h}deg ${hsl.l}% ${hsl.l}%`;
}
