import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Promo() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10vh", "10vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed top-[-10vh] left-0 h-[120vh] w-full">
        <motion.div style={{ y }} className="relative w-full h-full">
          <img
            src="/images/spiral-circles.jpg"
            alt="Abstract spiral circles"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <h3 className="absolute top-12 right-6 text-white uppercase z-10 text-sm md:text-base lg:text-lg">
        Антистресс
      </h3>

      <div className="absolute bottom-12 right-6 z-10 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl text-right">
        <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          Дыхание «4–7–8»: вдох 4 сек, задержка 7, выдох 8.
        </p>
        <p className="text-white text-sm sm:text-base opacity-80 leading-relaxed">
          Один цикл — и уровень стресса снижается. Тело успокаивается, голова проясняется.
          Это не магия — это физиология.
        </p>
      </div>
    </div>
  );
}