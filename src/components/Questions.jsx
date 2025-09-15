import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Questions({ question, arrowDown, answer, arrowUp }) {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <div className="w-full tracking-wide max-w-[98%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[80%] mx-auto mb-4 transition-all duration-300 inter">
      <div
        className={`border-2 flex justify-between items-start sm:items-center px-[13px] sm:px-6 py-4 rounded-lg ${
          isOpen ? "border-[#FA3E67]" : "border-[#7070702d]"
        }`}
      >
        <p className="font-medium text-start py-1 mobile:max-xxm:w-64 xxm:max-blm:w-[295px] mobile:max-sm:text-[17px] sm:text-[15px] lg:text-[17px] leading-snug sm:leading-normal">
          {question}
        </p>

        {isOpen ? (
          <div className="border hover:shadow-[0_0_8px_#FA3E67] transition border-[#FA3E67] mobile:max-xxm:h-8 mobile:max-xxm:w-8 h-9 w-9 flex items-center justify-center rounded-full">
            <button
              onClick={closePopup}
              className="flex items-center justify-center"
            >
              <img className="h-4" src={arrowUp} alt="collapse" />
            </button>
          </div>
        ) : (
          <div className="border hover:shadow-[0_0_8px_#707070] transition border-[#7070702d] h-9 w-9 mobile:max-xxm:h-8 mobile:max-xxm:w-8 flex items-center justify-center rounded-full">
            <button
              onClick={openPopup}
              className="flex items-center justify-center"
            >
              <img className="h-4" src={arrowDown} alt="expand" />
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border-2 border-t-0 tracking-wider leading-6 border-[#79797d] bg-transparent mx-2 sm:mx-[7px] px-4 py-3 text-white text-sm rounded-b-md text-left">
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
