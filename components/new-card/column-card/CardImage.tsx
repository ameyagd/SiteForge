import type { FC } from "react";
import type { TCardData } from "../new-card.type";

import { columnCardImgHeightMap } from "../card.meta";

import { BgPicture, CrdImage, Picture } from "./ColumnCard.styled";

type TCardImageProps = {
  config: Required<
    Pick<
      TCardData["config"],
      "imgType" | "imgUrl" | "imageSizes" | "titleText" | "size"
    >
  >;
  styleConfig?: TCardData["styleConfig"];
} & Pick<TCardData, "loading">;

export const CardImage: FC<TCardImageProps> = (props) => {
  const { config, styleConfig /* loading = "lazy" */ } = props;
  return (
    <>
      {config.imgType === "default" ? (
        <Picture
          $height={columnCardImgHeightMap[config.size]}
          $customstyles={styleConfig?.imageWrapper}
        >
          <CrdImage
            fill
            // loading={loading}
            src={config.imgUrl}
            alt={config.titleText}
            sizes={config.imageSizes}
            $customstyles={styleConfig?.image}
          />
        </Picture>
      ) : config.imgType === "background" ? (
        <BgPicture $customstyles={styleConfig?.imageWrapper}>
          <CrdImage
            fill
            // loading={loading}
            src={config.imgUrl}
            alt={config.titleText}
            sizes={config.imageSizes}
            $customstyles={styleConfig?.image}
          />
        </BgPicture>
      ) : null}
    </>
  );
};
