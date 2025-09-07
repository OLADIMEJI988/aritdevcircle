import React, { useMemo, useRef } from "react";
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
import datesglow from "../assets/datesglow.png";

import { motion, useInView } from "framer-motion";

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

  return (
    <div className="relative flex items-start cursor-pointer" ref={ref}>
      {/* Icon Node */}
      <div className="relative z-10 flex items-center justify-center w-10 h-10 bg-[#2D2D2D] -mt-1 rounded-xl">
        <img src={event.icon} className="w-5 h-5 object-contain" alt="" />
      </div>

      {/* Connector Line */}
      {!isLast && (
        <motion.div
          initial={{ height: 0 }}
          animate={inView ? { height: "100%" } : {}}
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

// Card for desktop layout
const TimelineCard = ({ event }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative border border-[#fc4f7b] rounded-xl px-5 py-6 w-[220px] text-center shadow-md"
    >
      <p className="text-sm text-gray-300">{event.date}</p>
      <h3 className="text-lg font-medium">{event.title}</h3>
    </motion.div>
  );
};

export default function DateTimeline() {
  const refs = useMemo(() => events.map(() => React.createRef()), []);
  const headingRef = useRef(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <div className="relative mt-5 pt-5 lg:pt-10">
      <img className="absolute" src={datesglow} alt="" />

      <motion.p
        ref={headingRef}
        initial={{ opacity: 0, y: -30 }}
        animate={headingInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl tracking-wide md:text-5xl text-center mb-12"
      >
        Important <span className="text-[#fc4f7b]">Dates</span>
      </motion.p>

      {/* Mobile layout*/}
      <div className="flex flex-col items-start justify-center mx-[10vw] xxm:mx-[14vw] space-y-12 lg:hidden px-6">
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

      {/* Desktop layout */}
      <div className="hidden lg:flex flex-col items-center relative">
        <div className="flex items-center space-x-24">
          <TimelineCard event={events[0]} />
          <TimelineCard event={events[1]} />
          <TimelineCard event={events[2]} />
        </div>

        <div className="flex items-center my-12 space-x-24">
          <TimelineCard event={events[3]} />
          <TimelineCard event={events[4]} />
          <TimelineCard event={events[5]} />
        </div>

        <div className="flex items-center space-x-24">
          <TimelineCard event={events[6]} />
          <TimelineCard event={events[7]} />
        </div>
      </div>
    </div>
  );
}
