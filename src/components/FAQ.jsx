import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import faqglow from "../assets/faqglow.webp";
import mobileglow from "../assets/mobilesideglow.webp";
import desktopline from "../assets/desktopline.webp";
import mobileline from "../assets/mobileline.webp";
import arrowUp from "../assets/arrowup.webp";
import arrowDown from "../assets/arrowdown.webp";
import Questions from "./Questions";

export default function FAQ() {
  return (
    <div className="relative bg-[#0E0E0E] text-white ssm:max-lg:pb-56 mobile:max-blm:pb-28 blm:max-lg:pb-44 lg:pb-44 pt-10 tracking-wide inter overflow-hidden">

      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-[229px] bg-gradient-to-b from-[#0E0E0E] to-transparent z-10" />

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 w-full ssm:max-lg:h-[150px] h-[50px] bg-gradient-to-t from-[#0E0E0E] to-transparent z-10" />

      {/* Background Glow (Desktop) */}
      <div
        className="hidden lg:block absolute inset-0 bg-no-repeat bg-center bg-cover opacity-50 pointer-events-none z-0"
        style={{ backgroundImage: `url(${faqglow})` }}
      />

      {/* Background Glow (Mobile) */}
      <div
        className="lg:hidden absolute inset-0 bg-no-repeat bg-center bg-cover opacity-50 pointer-events-none z-0"
        style={{ backgroundImage: `url(${mobileglow})` }}
      />

      {/* Bottom Line (Desktop) */}
      <div
        className="lg:block -mb-5 mobile:max-ssm:hidden absolute bottom-0 left-0 h-[250px] w-full bg-no-repeat bg-center bg-cover pointer-events-none z-0"
        style={{ backgroundImage: `url(${desktopline})` }}
      />

      {/* Bottom Line (Mobile) */}
      <div
        className="block ssm:max-lg:hidden lg:hidden absolute bottom-0 left-0 h-[250px] w-full bg-no-repeat bg-center bg-cover pointer-events-none z-0"
        style={{ backgroundImage: `url(${mobileline})` }}
      />

      {/* Content Layer */}
      <div className="relative z-10">
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
            answer="All experience levels are welcome! However we don't provide beginner training materials. Our focus is on helping those who already have some tech skills take that next big step: turning those skills into paid opportunities!"
          />
          <FAQItem
            question="What makes this community different from others?"
            answer="We go beyond just technical skills. Our focus is on the holistic growth of tech professionals—equipping you with practical, career-advancing skills while providing a supportive, inclusive, and empowering space to thrive."
          />
        </div>
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
      className="mb-8 font-semibold text-center px-4 md:px-10 lg:px-20"
    >
      <p className="mobile:max-xxm:text-[35px] xxm:text-3xl sm:text-4xl">
        Frequently <span className="text-[#FA3E67]">Asked</span> Questions
      </p>
    </motion.div>
  );
}

/* Each Question Animates On Scroll */
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
