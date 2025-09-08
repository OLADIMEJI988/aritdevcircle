import React, { useEffect, useState, useMemo, useRef } from "react";
import open from "../assets/regstart.webp";
import orientation from "../assets/orientation.webp";
import location from "../assets/location.svg";
import sessionicon from "../assets/sessionicon.svg";
import whocanjoinglow from "../assets/whocanjoinglow.webp";

import { motion, useInView } from "framer-motion";

const events = [
  {
    title: (
      <>
        <span className="text-[#fc4f7b]">Early-Career</span> Developers, Designers or Product/Project Managers
      </>
    ),
    icon: location,
    image: open,
  },
  {
    subtext:
      "All participants will walk away with new skills, new connections and a real sense of what it feels like to ship software as a product!",
    icon: sessionicon,
    image: orientation,
  },
];

const TimelineItem = React.forwardRef(({ event, isLast, nextRef }, ref) => {
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (ref?.current && nextRef?.current) {
      const currentRect = ref.current.getBoundingClientRect();
      const nextRect = nextRef.current.getBoundingClientRect();
      const distance = nextRect.top - currentRect.top;
      setLineHeight(distance);
    }
  }, [ref, nextRef]);

  return (
    <div className="relative flex items-start" ref={ref}>
      {/* Icon Node */}
      {/* <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-[#2D2D2D] rounded-xl">
        <img src={event.icon} className="w-5 h-5 object-contain" alt="" />
      </div> */}

      {/* Connector Line */}
      {/* {!isLast && (
        <motion.div
          initial={{ height: 0 }}
          animate={inView ? { height: lineHeight } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute left-5 top-10 w-[2px] bg-[#2D2D2D] origin-top"
        />
      )} */}

      {/* Event Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className=""
      >
        <p className="text-2xl text-center max-w-[400px] mobile:max-lg:w-[300px] mb-1 -mt-5 leading-9">
          {event.title}
        </p>

        <h3 className="text-sm text-center font-normal max-w-[400px] mobile:max-lg:leading-6 mobile:max-lg:w-[300px]">
          {event.subtext}
        </h3>
      </motion.div>
    </div>
  );
});

export default function WhoCanJoin() {
  const refs = useMemo(() => events.map(() => React.createRef()), []);
  const sectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative mt-16 lg:mt-[108px] flex flex-col pb-24 pt-14 items-center justify-center"
      style={{
        backgroundImage: `url(${whocanjoinglow})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-[129px] bg-gradient-to-b from-[#0E0E0E] to-transparent z-10" />

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full h-[129px] bg-gradient-to-t from-[#0E0E0E] to-transparent z-10" />

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={sectionInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-4xl lg:text-5xl text-center px-4 tracking-wide leading-snug relative z-10"
      >
        Who Can <span className="text-[#fc4f7b]">Participate?</span>
      </motion.p>

      <div className="flex flex-col mx-auto lg:max-w-[800px] lg:flex-row gap-10 lg:gap-3 mt-10 items-center relative z-10">
        {/* Timeline */}
        <div className="relative flex justify-center mt-5 w-full mobile:max-lg:px-[3px]">
          <div className="tracking-wide font-normal flex flex-col space-y-14 text-start w-full">
            {events.map((event, i) => (
              <TimelineItem
                key={i}
                event={event}
                isLast={i === events.length - 1}
                nextRef={i < events.length - 1 ? refs[i + 1] : null}
                ref={refs[i]}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
