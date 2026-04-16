import type { CustomVisualizationProps } from "@metabase/custom-viz";
import { ThumbsIcon } from "./ThumbsIcon";
import { Settings } from "./types";

export const VisualizationComponent = (
  props: CustomVisualizationProps<Settings>,
) => {
  const { height, series, settings, width } = props;
  const { threshold } = settings;
  const value = series[0].data.rows[0][0];

  if (!height || !width) {
    return null;
  }

  if (typeof value !== "number" || typeof threshold !== "number") {
    throw new Error("Value and threshold need to be numbers");
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
      }}
    >
      <ThumbsIcon
        color="var(--mb-color-brand)"
        height={Math.min(height * 0.8, 256)}
        isDown={value < threshold}
      />
    </div>
  );
};
