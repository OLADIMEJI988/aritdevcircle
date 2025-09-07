import React from 'react'
import { motion } from 'framer-motion'
import ApplyCta from './ApplyCta'
import whocanjoinglow from "../assets/whocanjoinglow.webp"

export default function ApplyNow() {
  return (
    <>
      {/* Desktop view */}
      <motion.div
        className="mobile:max-lg:hidden pb-5 pt-1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.p
          className="text-4xl lg:text-5xl tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Register <span className="text-[#FA3E67]">Now</span>
        </motion.p>

        <motion.div
          className="flex mobile:max-lg:flex-col justify-center mt-10 gap-6 mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <ApplyCta title="Developers" subtext="Developers looking to gain real project experience" ctatext="Join as a developer" link="https://forms.gle/KQL8Jx6qf89Xtart9" />
          <ApplyCta title="Designer" subtext="Designers eager to practice UI/UX in live collaboration." ctatext="Join as a designer" link="https://forms.gle/VC3ydM9DeYqp6tWd8" />
          <ApplyCta title="Product Manager" subtext="Product managers that wants to sharpen their leadership skills." ctatext="Join as a manager" link="https://forms.gle/TczgYJCTJf4MF6Jh6" />
        </motion.div>
      </motion.div>

      {/* Mobile view */}
      <motion.div
        className="lg:hidden pb-5 pt-1 mobile:max-lg:pb-0 mobile:max-lg:px-[15px]"
        style={{
          backgroundImage: `url(${whocanjoinglow})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.p
          className="text-4xl lg:text-5xl tracking-wide mobile:max-lg:mt-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Register <span className="text-[#FA3E67]">Now</span>
        </motion.p>

        <motion.div
          className="flex mobile:max-lg:flex-col justify-center mt-10 gap-6 mobile:max-lg:gap-7 mb-5"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <ApplyCta title="Developers" subtext="Developers looking to gain real project experience" ctatext="Join as a developer" link="https://forms.gle/KQL8Jx6qf89Xtart9" />
          <ApplyCta title="Designer" subtext="Designers eager to practice UI/UX in live collaboration." ctatext="Join as a designer" link="https://forms.gle/VC3ydM9DeYqp6tWd8" />
          <ApplyCta title="Product Manager" subtext="Product managers that wants to sharpen their leadership skills." ctatext="Join as a manager" link="https://forms.gle/TczgYJCTJf4MF6Jh6" />
        </motion.div>
      </motion.div>
    </>
  )
}
