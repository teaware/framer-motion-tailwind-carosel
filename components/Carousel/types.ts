import { ReactNode } from "react";
import { MotionValue, PanInfo } from "framer-motion";

export type CarouselProps = {
  children: ReactNode;
  renderDots?: (args: Omit<DotProps, "length">) => ReactNode;
  autoPlay?: boolean;
  interval?: number;
  loop?: boolean;
};

export type SliderProps = {
  x: MotionValue<number>;
  i: number;
  activeIndex: number;
  children: ReactNode;
  onDragEnd: (e: Event, dragProps: PanInfo) => void;
};

export type DotProps = {
  length: number;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
};
