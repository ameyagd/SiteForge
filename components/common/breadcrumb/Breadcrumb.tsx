import type { FC } from "react";
import type { TBreadcrumbProps } from "./breadcrumb.type";

import { BreadcrumbLiMap } from "./breadcrumb-variant.map";
import {
  BreadcrumbLink,
  BreadcrumbList,
  NavBreadcrumb,
} from "./Breadcrumb.styled";

export const Breadcrumb: FC<TBreadcrumbProps> = ({
  breadcrumbItems,
  breadcrumbVariant,
}) => {
  return (
    <NavBreadcrumb aria-label="breadcrumb">
      <BreadcrumbList>
        {breadcrumbItems.map((item, index) => {
          const BreadcrumbLI = BreadcrumbLiMap[breadcrumbVariant];
          return (
            <BreadcrumbLI key={index}>
              <BreadcrumbLink
                href={item.link || ""}
                onClick={(e) => {
                  if (!item.link) e.preventDefault();
                }}
              >
                {item.label}
              </BreadcrumbLink>
            </BreadcrumbLI>
          );
        })}
      </BreadcrumbList>
    </NavBreadcrumb>
  );
};
