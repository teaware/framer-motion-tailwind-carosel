import {
  forwardRef,
  useRef,
  useState,
  useEffect,
  Children,
  ReactNode,
} from "react";
import {
  animate,
  AnimationOptions,
  PanInfo,
  useMotionValue,
} from "framer-motion";

import { CarouselProps } from "./types";
import Slider from "./Slider";
import Dots from "./Dots";

const transition: AnimationOptions<any> = {
  type: "tween", // 'tween', 'spring'
  duration: 0.7,
  ease: [0.32, 0.72, 0, 1],
};

// eslint-disable-next-line react/display-name
const Container = forwardRef<HTMLDivElement, { children: ReactNode }>(
  (props, ref) => (
    <div ref={ref} className="flex h-full w-full items-center overflow-hidden">
      {props.children}
    </div>
  )
);

export const Carousel = ({
  children,
  renderDots,
  autoPlay = false,
  interval = 2000,
  loop = false,
}: CarouselProps) => {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const calculateNewX = () => -index * (containerRef.current?.clientWidth || 0);

  const items = Children.toArray(children);

  const handleEndDrag = (e: Event, dragProps: PanInfo) => {
    const clientWidth = containerRef.current?.clientWidth || 0;

    const { offset } = dragProps;

    if (offset.x > clientWidth / 4 && index > 0) {
      handlePrev();
    } else if (offset.x < -clientWidth / 4 && index < items.length - 1) {
      handleNext();
    } else {
      animate(x, calculateNewX(), transition);
    }
  };

  const handleNext = () => {
    const idx = loop ? 0 : index;
    setIndex(index + 1 === items.length ? idx : index + 1);
  };

  const handlePrev = () => {
    const idx = loop ? items.length - 1 : 0;
    setIndex(index - 1 < 0 ? idx : index - 1);
  };

  useEffect(() => {
    const controls = animate(x, calculateNewX(), transition);
    return controls.stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  useEffect(() => {
    if (!autoPlay) {
      return;
    }
    const timer = setInterval(() => handleNext(), interval);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleNext, interval]);

  return (
    <>
      <Container ref={containerRef}>
        {items.map((child, i) => (
          <Slider
            onDragEnd={handleEndDrag}
            x={x}
            i={i}
            key={i}
            activeIndex={index}
          >
            {child}
          </Slider>
        ))}
      </Container>
      {renderDots ? (
        renderDots({ setActiveIndex: setIndex, activeIndex: index })
      ) : (
        <Dots
          length={items.length}
          setActiveIndex={setIndex}
          activeIndex={index}
        />
      )}
    </>
  );
};
