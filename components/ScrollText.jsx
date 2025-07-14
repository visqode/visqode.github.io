"use client";
import ScrollVelocity from "./Features/ScrollVelocity";

const ScrollText = () => {
  return (
    <section className="mt-15">
      <div className="w-[97%] fade-mask bg-[whitesmoke] mx-auto overflow-hidden rounded-[10px]">
        <ScrollVelocity
          texts={[
            "   ,  Web Dev - Graphic Design",
            "   ,  Brand Building    -    Video Editing",
          ]}
          className="custom-scroll-text rajdhani py-[14px] text-[40px]"
        />
      </div>
    </section>
  );
};

export default ScrollText;
