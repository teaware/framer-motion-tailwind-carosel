import { motion } from "framer-motion";
import { SliderProps } from "./types";

const Slider = ({ x, i, onDragEnd, children, activeIndex }: SliderProps) => (
  <motion.div
    style={{
      x,
      left: `${i * 100}%`,
      right: `${i * 100}%`,
    }}
    drag="x"
    dragElastic={0.3}
    onDragEnd={onDragEnd}
    variants={{
      inactive: { scale: 0.9 },
      active: { scale: 1 },
    }}
    animate={activeIndex === i ? "active" : "inactive"}
    className="inline-block h-full w-full flex-none"
  >
    {children}
  </motion.div>
);

export default Slider;
