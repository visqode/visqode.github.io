"use client";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const CircularText = ({
  text = "VisQode",
  spinDuration = 20,
  onHover = "speedUp", // "pause", "slowDown", "speedUp", "goBonkers"
  className = "",
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();

  const startAnimation = (duration) => {
    controls.start({
      rotate: 360,
      scale: 1,
      transition: {
        rotate: {
          repeat: Infinity,
          ease: "linear",
          duration,
        },
        scale: {
          type: "spring",
          damping: 20,
          stiffness: 300,
        },
      },
    });
  };

  useEffect(() => {
    startAnimation(spinDuration);
  }, [spinDuration]);

  const handleHoverStart = () => {
    let duration = spinDuration;
    let scale = 1;

    switch (onHover) {
      case "pause":
        controls.stop();
        return;
      case "slowDown":
        duration = spinDuration * 2;
        break;
      case "speedUp":
        duration = spinDuration / 4;
        break;
      case "goBonkers":
        duration = spinDuration / 10;
        scale = 0.8;
        break;
    }

    controls.start({
      rotate: 360,
      scale,
      transition: {
        rotate: {
          repeat: Infinity,
          ease: "linear",
          duration,
        },
        scale: {
          type: "spring",
          damping: 20,
          stiffness: 300,
        },
      },
    });
  };

  const handleHoverEnd = () => {
    startAnimation(spinDuration);
  };

  return (
    <motion.div
      className={`relative rounded-full w-16 h-16 md:w-20 md:h-20 text-white font-black cursor-pointer ${className}`}
      animate={controls}
      initial={{ rotate: 0 }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transformOrigin: "center",
      }}
    >
      {letters.map((letter, i) => {
        const angle = (360 / letters.length) * i;
        const radius = 30;

        const x = +(Math.cos((angle * Math.PI) / 180) * radius).toFixed(2);
        const y = +(Math.sin((angle * Math.PI) / 180) * radius).toFixed(2);
        const rotation = +(angle + 90).toFixed(2);

        return (
          <span
            key={i}
            className="absolute text-xs md:text-sm transition-all duration-500"
            style={{
              transform: `translate(${x}px, ${y}px) rotate(${rotation}deg)`,
              left: "50%",
              top: "50%",
              transformOrigin: "center",
            }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
