import type { CustomStaticVisualizationProps } from "@metabase/custom-viz";
import { ThumbsIcon } from "./ThumbsIcon";
import type { Settings } from "./types";

export const StaticVisualizationComponent = (
  props: CustomStaticVisualizationProps<Settings>,
) => {
  const { series, settings } = props;
  const { threshold } = settings;
  const value = series[0].data.rows[0][0];

  if (typeof value !== "number" || typeof threshold !== "number") {
    throw new Error("Value and threshold need to be numbers");
  }

  return <ThumbsIcon color="#509ee2" isDown={value < threshold} />;
};
