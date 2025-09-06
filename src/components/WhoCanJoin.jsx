import React, { useEffect, useState, useMemo } from "react";
import open from "../assets/regstart.webp";
import close from "../assets/regcloses.webp";
import team from "../assets/team.webp";
import orientation from "../assets/orientation.webp";
import location from "../assets/location.svg";
import routing from "../assets/routing.svg";
import teamicon from "../assets/teamicon.svg";
import sessionicon from "../assets/sessionicon.svg";
import pplliftingtrophy from "../assets/pplliftingtrophy.png";

import { motion, useInView } from "framer-motion";

const events = [
  { title: "Developers", subtext: "Looking to gain real project experience", icon: location, image: open },
  { title: "Designers", subtext: "Looking to gain real project experience", icon: routing, image: close },
  { title: "Product Managers", subtext: "Looking to gain real project experience", icon: teamicon, image: team },
  { title: "The Masses", subtext: "Irrespective of your role, all particpant will walk away with new skills, new connections and a real sense of what it feels lijke to ship software as a product.", icon: sessionicon, image: orientation },
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

  const Icon = event.icon;

  return (
    <div className="relative flex items-start" ref={ref}>
      {/* Icon Node */}
      <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-[#2D2D2D] rounded-xl">
        <img src={Icon} className="w-5 h-5 object-contain" alt="" />
      </div>

      {/* Connector Line */}
      {!isLast && (
        <motion.div
          initial={{ height: 0 }}
          animate={inView ? { height: lineHeight } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute left-5 top-10 w-[2px] bg-[#2D2D2D] origin-top"
        />
      )}

      {/* Event Content */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="ml-6"
      >
        <p className="text-xl mb-1 -mt-2">{event.title}</p>
        <h3 className="text-sm font-normal max-w-[300px]">{event.subtext}</h3>
      </motion.div>
    </div>
  );
});

export default function WhoCanJoin() {
  const refs = useMemo(() => events.map(() => React.createRef()), []);

  return (
    <div className="mt-16 lg:mt-16 flex flex-col pb-20 pt-8">
      <p className="text-4xl lg:text-5xl text-center px-4">
        Who Can Join The <span className="text-[#fc4f7b]">Challenge!</span>
      </p>

      {/* Responsive layout */}
      <div className="flex flex-col mx-auto max-w-[800px] lg:flex-row gap-10 lg:gap-3 mt-10 items-center">
            {/* Left Image */}
            <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] flex-shrink-0">
                <img
                className="w-full h-full object-contain"
                src={pplliftingtrophy}
                alt=""
                />
            </div>

            {/* Timeline */}
            <div className="relative flex justify-center w-full max-w-lg">
                <div className="tracking-wide font-normal flex flex-col space-y-8 md:space-y-12 text-start w-full">
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


    </div>
  );
}
