import type { FC } from "react";
import type { TCardData } from "./new-card.type";

import { ColumnCard } from "./column-card";
import { RowCard } from "./row-card";
import { CardLink } from "./NewCard.styled";

export const NewCard: FC<TCardData> = (props) => {
  const { config, styleConfig, loading } = props;
  return (
    <CardLink href={config.url}>
      {config.type === "column" ? (
        <ColumnCard
          config={config}
          styleConfig={styleConfig}
          // loading={loading}
        />
      ) : (
        <RowCard config={config} styleConfig={styleConfig} loading={loading} />
      )}
    </CardLink>
  );
};
