import { TStyleConfig } from "./ContactForm.type";

export function getCustomStyle(
  defaultStyles?: TStyleConfig,
  activeStyles?: TStyleConfig
) {
  return (isActive: boolean, property: keyof TStyleConfig) => {
    if (isActive) {
      return (defaultStyles?.[property] || "") + activeStyles?.[property];
    }
    return defaultStyles?.[property];
  };
}
