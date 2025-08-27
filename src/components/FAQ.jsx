import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import arrowUp from "../assets/arrowup.webp";
import arrowDown from "../assets/arrowdown.webp";
import Questions from "./Questions";

export default function FAQ() {
  return (
    <div className="bg-[#0E0E0E] text-white mobile:max-lg:pb-80 py-10 tracking-wide inter">
      {/* Title */}
      <FAQHeader />

      {/* FAQ Items */}
      <div className="mb-20 mt-4 px-4 md:px-10 lg:px-32 space-y-6">
        <FAQItem
          question="What is Queen Arit Circle about?"
          answer="Queen Arit Circle is a supportive community for early-career and mid-level tech professionals designed to help members transition from learning to earning through mentorship, collaboration and career enhancement."
        />
        <FAQItem
          question="Is the community only for technical professionals?"
          answer="No. While we have developers, designers, and data professionals, we also support non-technical roles such as virtual/executive assistants, project managers, technical writers, cybersecurity and many more."
        />
        <FAQItem
          question="Do I need prior experience in tech to join?"
          answer="Not at all. Whether you’re just starting out, transitioning into tech, or looking to level up your existing skills, you’ll find resources and support tailored to your stage."
        />
        <FAQItem
          question="What makes this community different from others?"
          answer="We go beyond just technical skills. Our focus is on the holistic growth of tech professionals—equipping you with practical, career-advancing skills while providing a supportive, inclusive, and empowering space to thrive."
        />
      </div>
    </div>
  );
}

/* Title Animation */
function FAQHeader() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-5 font-semibold text-center px-4 md:px-10 lg:px-20"
    >
      <p className="text-[25px] md:text-[30px] lg:text-[36px]">
        Frequently <span className="text-[#FA3E67]">Asked</span> Questions
      </p>
    </motion.div>
  );
}

/* Each Question Should Animate On Scroll */
function FAQItem({ question, answer }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Questions
        question={question}
        answer={answer}
        arrowDown={arrowDown}
        arrowUp={arrowUp}
      />
    </motion.div>
  );
}
