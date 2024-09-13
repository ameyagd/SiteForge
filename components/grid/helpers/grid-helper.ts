import type { TCardUnit } from "@/types";

export const cardRoundnessMap = new Map<TCardUnit, number>();
cardRoundnessMap.set("none", 2);
cardRoundnessMap.set("xs", 4);
cardRoundnessMap.set("sm", 8);
cardRoundnessMap.set("md", 16);
cardRoundnessMap.set("lg", 24);

export const cardImageMinimumRoundnessMap = new Map<TCardUnit, number>();
cardImageMinimumRoundnessMap.set("none", 0);
cardImageMinimumRoundnessMap.set("xs", 2);
cardImageMinimumRoundnessMap.set("sm", 4);
cardImageMinimumRoundnessMap.set("md", 4);
cardImageMinimumRoundnessMap.set("lg", 4);

export const cardShadowMap = new Map<TCardUnit, string>();
cardShadowMap.set("none", "none");
cardShadowMap.set("xs", "rgba(0, 0, 0, 0.3) 0px 2px 5px 0px");
cardShadowMap.set("sm", "rgba(0, 0, 0, 0.3) 0px 4px 10px 0px");
cardShadowMap.set("md", "rgba(0, 0, 0, 0.3) 0px 5px 15px 0px");
cardShadowMap.set("lg", "rgba(0, 0, 0, 0.3) 0px 10px 25px 0px");

export const filterShadowMap = new Map<TCardUnit, string>();
filterShadowMap.set("none", "0px 0px 0px transparent");
filterShadowMap.set("xs", "0px 2px 5px rgba(0, 0, 0, 0.3)");
filterShadowMap.set("sm", "0px 4px 10px rgba(0, 0, 0, 0.3)");
filterShadowMap.set("md", "0px 5px 15px rgba(0, 0, 0, 0.3)");
filterShadowMap.set("lg", "0px 10px 25px rgba(0, 0, 0, 0.3)");

cardShadowMap.set("lg", "rgba(0, 0, 0, 0.3) 0px 10px 25px 0px");
