import type { agencyMccMapping } from "../helpers/ccpa";

type TExtractListKeys<T> = T extends { mcc_list: infer U } ? keyof U : never;
type TAgencyMapping = typeof agencyMccMapping;

// prettier-ignore
export type TAllMccKeys = TExtractListKeys<TAgencyMapping[keyof TAgencyMapping]>;
export type TAgencyKeys = keyof typeof agencyMccMapping;
export type TImageFontColor = "black" | "white";
