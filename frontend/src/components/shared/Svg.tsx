import clsx from "clsx";
import { FC, SVGAttributes } from "react";

type SvgProps = SVGAttributes<SVGElement> & {
  use: string;
};

/**
 * SVG
 */
const Svg: FC<SvgProps> = ({ use, className, ...res }) => (
  <svg
    {...res}
    className={clsx("block flex-none [fill-rule:evenodd]", className)}
  >
    <use href={`/svgs/svg.svg?v=1#${use}`} />
  </svg>
);

export default Svg;
