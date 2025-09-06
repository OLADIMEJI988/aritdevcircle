import React, { useRef, useEffect, useState, useMemo } from "react";
import open from "../assets/regstart.webp";
import close from "../assets/regcloses.webp";
import team from "../assets/team.webp";
import orientation from "../assets/orientation.webp";
import hackstarts from "../assets/hackstarts.webp";
import hackends from "../assets/hackends.webp";
import grading from "../assets/grading.webp";
import award from "../assets/award.webp";
import location from "../assets/location.svg";
import routing from "../assets/routing.svg";
import teamicon from "../assets/teamicon.svg";
import sessionicon from "../assets/sessionicon.svg";
import notificationcircle from "../assets/notification-circle.svg";
import notificationbing from "../assets/notification-bing.svg";
import cpusetting from "../assets/cpu-setting.svg";
import cup from "../assets/cup.svg";
import semicircle from "../assets/semicircle.webp";
import datesglow from "../assets/datesglow.png";

import { motion, useInView } from "framer-motion";

// Add an image for each event
const events = [
  { date: "September 8th", title: "Registration Opens", icon: location, image: open },
  { date: "September 14th", title: "Registration Closes", icon: routing, image: close },
  { date: "September 15th - 19th", title: "Team Creation", icon: teamicon, image: team },
  { date: "September 20th", title: "Orientation Session", icon: sessionicon, image: orientation },
  { date: "September 29th", title: "Hackathon Kickoff", icon: notificationcircle, image: hackstarts },
  { date: "October 19th", title: "Hackathon Ends", icon: notificationbing, image: hackends },
  { date: "October 20th - 31st", title: "Project Grading", icon: cpusetting, image: grading },
  { date: "November 1st", title: "Awards Ceremony", icon: cup, image: award },
];

const TimelineItem = React.forwardRef(({ event, isLast, nextRef }, ref) => {
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [lineHeight, setLineHeight] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (ref?.current && nextRef?.current) {
      const currentRect = ref.current.getBoundingClientRect();
      const nextRect = nextRef.current.getBoundingClientRect();
      const distance = nextRect.top - currentRect.top;
      setLineHeight(distance);
    }

    // Detect screen size
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [ref, nextRef]);

  const Icon = event.icon;

  return (
    <div
      className="relative flex items-start cursor-pointer"
      ref={ref}
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
    >
      {/* Hovered Image Beside Node (Desktop only) */}
      {!isMobile && hovered && (
        <motion.img
          src={event.image}
          alt={event.title}
          className="absolute right-[280px] -mt-10 -translate-y-1/2 
                     w-full object-contain rounded-xl shadow-2xl z-50"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
        />
      )}

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
        <p className="text-[#fc4f7b] text-sm">{event.date}</p>
        <h3 className="text-xl font-normal">{event.title}</h3>
      </motion.div>
    </div>
  );
});

export default function DateTimeline() {
  const refs = useMemo(() => events.map(() => React.createRef()), []);

  return (
    <div className="relative min-h-screen mt-32 pt-5 lg:mt-32">
      <img className="absolute" src={datesglow} alt="" />

      {/* Flex wrapper: column on mobile, row on desktop */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center lg:justify-between text-center md:text-left">
        {/* Left side text */}
        <p className="text-4xl tracking-wide md:text-5xl w-full md:w-[500px] px-4 mobile:max-lg:mb-12 mb-10 md:mb-0">
          Important <span className="text-[#fc4f7b]">Dates</span>
        </p>

        {/* Right side timeline */}
        <div className="relative flex justify-center w-full">
          <div className="ml-[17vw] tracking-wide font-normal lg:-ml-40 flex flex-col space-y-12 md:space-y-16 text-start w-full md:w-auto">
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

        {/* Semicircle (responsive height only) */}
        <img
          src={semicircle}
          className="absolute mobile:max-xxm:mt-[320px] xxm:max-lg:mt-56 right-0 top-1/2 -translate-y-1/2 
                     h-[350px] xxm:h-[400px] sm:h-[400px] md:h-[700px] lg:h-[1000px] z-0"
          alt=""
        />

      </div>
    </div>
  );
}
