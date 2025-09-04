import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  { id: 1, title: "Hackathon 1", desc: "Build something amazing 🚀" },
  { id: 2, title: "Hackathon 2", desc: "Team up and win big 🏆" },
  { id: 3, title: "Hackathon 3", desc: "Showcase your skills 💡" },
];

export default function CardSlider() {
  const [index, setIndex] = useState(0);

  const nextCard = () => setIndex((prev) => (prev + 1) % cards.length);
  const prevCard = () =>
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="relative w-80 h-60">
        {cards.map((card, i) => {
          // distance from active card
          const offset = (i - index + cards.length) % cards.length;

          return (
            <motion.div
              key={card.id}
              className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gray-800 p-6 flex flex-col items-center justify-center shadow-xl"
              style={{
                zIndex: cards.length - offset,
              }}
              animate={{
                scale: offset === 0 ? 1 : 0.85, // front card bigger
                y: offset === 0 ? 0 : 40, // back card moves down
                opacity: offset === 0 ? 1 : 0.6,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-gray-300">{card.desc}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex mt-6 gap-4">
        <button
          onClick={prevCard}
          className="p-3 bg-gray-700 rounded-full hover:bg-gray-600"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={nextCard}
          className="p-3 bg-gray-700 rounded-full hover:bg-gray-600"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
