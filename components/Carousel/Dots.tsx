import { DotProps } from "./types";

const Dots = ({ length, activeIndex, setActiveIndex }: DotProps) => {
  return (
    <div className="absolute bottom-0 left-0 w-full">
      <div className="flex items-center justify-center gap-1">
        {new Array(length).fill("").map((_, i) => (
          <span
            onClick={() => setActiveIndex(i)}
            key={i}
            className={`${
              i === activeIndex ? "bg-slate-500" : "bg-slate-200"
            } inline-block h-[6px] w-[6px] rounded-full`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Dots;
