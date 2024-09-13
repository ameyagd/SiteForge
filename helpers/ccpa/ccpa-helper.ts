import type {
  TAgencyKeys,
  TAllMccKeys,
  TImageFontColor,
} from "@/types/ccpa.type";

import { agencyMccMapping } from "./agency-mcc.mapping";

// prettier-ignore
export function getPrivacyPolicyTemplateKeys(agency: TAgencyKeys, mcc: TAllMccKeys): string[] {
  const mccData = agencyMccMapping[agency].mcc_list as Record<TAllMccKeys, any>;
  const privacyTemplateKeys = mccData[mcc].privacy_policy_templates.map((key: string) => key.trim());
  return privacyTemplateKeys;
}

// prettier-ignore
export function getFirstPrivacyPolicyTemplateKey(agency: TAgencyKeys, mcc: TAllMccKeys) {
  const privacyTemplateKeys = getPrivacyPolicyTemplateKeys(agency, mcc);
  return privacyTemplateKeys[0];
}

// prettier-ignore
export function getContactImagePath(agency: TAgencyKeys, imagefontColor: TImageFontColor) {
  const contactData = agencyMccMapping[agency].contact_information;
  if (imagefontColor === "black") {
    return contactData.black_font.image_url;
  }
  return contactData.white_font.image_url;
}
