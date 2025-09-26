import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import flash from "../assets/flash.svg";
import arrow from "../assets/arrow-right.svg";
import innerglow from "../assets/footerglow.webp";
import Logo from "../assets/QueenAritCircleLogo.webp";
import centerglow from "../assets/centerglow.svg";
import Rule from "../components/Rule";
import participation from "../assets/participation.svg";
import contribution from "../assets/contribution.svg";
import communication from "../assets/communication.svg";
import engagement from "../assets/engagement.svg";
import links from "../assets/links.svg";
import questions from "../assets/questions.svg";
import prohibited from "../assets/prohibited.svg";
import segmentation from "../assets/segmentation.svg";
import RulesFooter from "../components/RulesFooter";

export default function Rules() {
  const heading = "QAC".split(" ");
  const rules = "Community Rules".split(" ");

  return (
    <div className="relative bg-[#0E0E0E] overflow-hidden">
      {/* Center Glow Behind Header */}
      <img
        src={centerglow}
        alt=""
        className="mobile:max-lg:hidden absolute top-0 left-1/2 -translate-x-1/2 w-[900px] pointer-events-none select-none"
      />

      <img
        className="absolute lg:hidden top-5 w-full h-[800px] object-cover"
        src={innerglow}
        alt="Glow"
      />

      {/* Header */}
      <header className="relative z-10 bg-transparent text-[#BBBABA] px-5 md:px-10 pt-4 mobile:max-lg:mb-20">
        <div className="flex justify-between items-center">
          <Link to="/">
            <img className="h-16" src={Logo} alt="logo" />
          </Link>

          <div className="flex gap-7 xl:gap-10 text-sm lg:text-[15px] xl:text-[19px] items-center tracking-wide">
            <button
              onClick={() =>
                (window.location.href = "https://proxy.nas.io/queenaritcircle")
              }
              className="bg-[#fc4f7b] hover:shadow-[0_0_7px_#FF4F76] cursor-pointer hoverEffect transition text-white xl:text-[20px] flex justify-center tracking-wide py-2 xl:pt-3 xl:pb-4 px-7 rounded-full font-semibold hover:opacity-90"
            >
              Join it's Free
            </button>
          </div>
        </div>
      </header>

      <div className="flex justify-center relative">
        {/* LEFT bubbles */}
        <div className="absolute left-40 mobile:max-lg:left-2 top-10 mobile:max-lg:-top-10 pointer-events-none sm:flex sm:flex-col sm:items-center sm:gap-64 z-10">
          <motion.div
            className="h-16 mobile:max-lg:h-[50px] w-16 mobile:max-lg:w-[50px] rounded-full"
            style={{
              background:
                "linear-gradient(180deg, #EFE3E6 0%, #DF496A 66%, #BF435E 100%)",
            }}
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 1.9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0,
            }}
          />

          <motion.div
            className="h-10 mobile:max-lg:h-9 w-10 mobile:max-lg:w-9 rounded-full self-start -ml-10 mobile:max-lg:ml-0 mobile:max-lg:mt-80"
            style={{
              background:
                "linear-gradient(180deg, #EFE3E6 0%, #DF496A 66%, #BF435E 100%)",
            }}
            animate={{ y: [0, -25, 0] }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3,
            }}
          />
        </div>

        {/* Center Content */}
        <div className="text-center flex flex-col items-center mx-4">
          <div className="p-[1px] border border-[#fc4f7b] rounded-full w-fit mx-auto mt-1 md:mt-10 hover:shadow-[0_0_8px_#FF4F76] cursor-pointer transition">
            <div className="rounded-full flex justify-center items-center gap-2 px-4 py-2">
              <img src={flash} alt="lightening img" className="h-[22px]" />
              <p className="text-white text-[16px]">Tech Career Empowerment</p>
            </div>
          </div>

          <motion.p
            className="text-[#E3E3E3] text-[38px] xsm:max-lg:text-5xl lg:text-[55px] xl:text-[80px] font-semibold tracking-wide flex-wrap justify-center mt-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.06, delayChildren: 0.3 },
              },
            }}
          >
            {heading.map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                style={{ willChange: "transform, opacity" }}
                className="mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          <motion.p
            className="text-[#E3E3E3] -mt-3 xsm:max-lg:mt-2 text-[38px] xsm:max-lg:text-5xl lg:text-[55px] xl:text-[80px] font-semibold tracking-wide flex-wrap justify-center"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 0.5 },
              },
            }}
          >
            {rules.map((word, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 25 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                style={{ willChange: "transform, opacity" }}
                className="mr-2"
              >
                {word}
              </motion.span>
            ))}
          </motion.p>

          <motion.p
            className="text-[#CECECE] text-lg lg:text-[18px] max-w-[550px] mx-auto mt-2 lg:-mt-[1px] leading-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1, ease: [0.25, 1, 0.5, 1] }}
            style={{ willChange: "transform, opacity" }}
          >
            Here are some rules that guides us in the circle.
          </motion.p>

          <motion.button
            onClick={() =>
              (window.location.href = "https://proxy.nas.io/queenaritcircle")
            }
            className="bg-[#fc4f7b] hover:shadow-[0_0_7px_#FF4F76] transition text-white mobile:max-xsm:py-[10px] xsm:max-lg:py-4 lg:py-2 mobile:max-xsm:px-8 xsm:max-lg:px-9 lg:px-7 rounded-full font-semibold hover:opacity-90 flex items-center gap-3 mx-auto mt-4 lg:mt-7"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 1, 0.5, 1] }}
            style={{ willChange: "transform, opacity" }}
          >
            <p className="text-lg tracking-wide">Join the Circle Here</p>
            <div
              onClick={() =>
                (window.location.href = "https://proxy.nas.io/queenaritcircle")
              }
              className="bg-white p-[5px] rounded-full"
            >
              <img className="h-6" src={arrow} alt="arrow" />
            </div>
          </motion.button>
        </div>

        {/* RIGHT bubbles */}
        <div className="absolute right-40 mobile:max-lg:-right-0 top-10 mobile:max-lg:-top-10 pointer-events-none sm:flex sm:flex-col sm:items-center sm:gap-64 z-10">
          <motion.div
            className="h-10 mobile:max-lg:h-9 w-10 mobile:max-lg:w-9 rounded-full"
            style={{
              background:
                "linear-gradient(180deg, #EFE3E6 0%, #DF496A 66%, #BF435E 100%)",
            }}
            animate={{ y: [0, -18, 0] }}
            transition={{
              duration: 2.1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
          />

          <motion.div
            className="h-16 w-16 mobile:max-lg:h-[50px] mobile:max-lg:w-[50px] rounded-full self-start -mr-10 mobile:max-lg:mr-2 mobile:max-lg:mt-80"
            style={{
              background:
                "linear-gradient(180deg, #EFE3E6 0%, #DF496A 66%, #BF435E 100%)",
            }}
            animate={{ y: [0, -30, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
      </div>

      <div className="h-[15pc] flex justify-center text-white relative top-[90px] lg:top-[200px] z-20">
        <p className="text-xl lg:text-2xl px-5 w-[600px] tracking-wide leading-9">
          Here are rules that all members of The Queen Arit Circle is expected
          to adhere to.
        </p>
      </div>

      <div className="mx-20 mobile:max-lg:mx-[10px] mt-28 mobile:max-lg:mt-5">
        <div className="flex mobile:max-lg:flex-col justify-center gap-20">
          <Rule
            img={participation}
            title="ACTIVE PARTICIPATION"
            subtext="Be an active participant. We take activity seriously ( we have a way to know how many messages you have sent) so be active else you will be removed."
          />
          <Rule
            img={contribution}
            title="ACTIVE CONTRIBUTION"
            subtext="Be an active contributor, share helpful resources (Articles, videos, tutorials, answers)"
          />
          <Rule
            img={communication}
            title="COMMUNICATION"
            subtext="Interact in a friendly manner. Your opinion is yours, don’t attempt to impose it on anyone, remember its a team work."
          />
        </div>

        <div className="flex mobile:max-lg:flex-col justify-center gap-20 my-28">
          <Rule
            img={engagement}
            title="ENGAGEMENT MOOD"
            subtext="No bashing of anyone’s religion, tribe, relationship, political ideology. You can have civil discourse but when it gets heated, you are out."
          />
          <Rule
            img={links}
            title="EXTERNAL LINKS"
            subtext="No posting of links to groups, business adverts or soliciting for community members to join your group initiative without approval from admin. Defaulting leads to immediate removal."
          />
          <Rule
            img={questions}
            title="ASKING QUESTIONS"
            subtext="If you have questions, please Go straight to the point and don’t ask if there’s anyone that can help you. Look up www.dontasktoask.com on the proper way to ask questions in tech communities."
          />
        </div>

        <div className="flex mobile:max-lg:flex-col justify-center gap-20 mb-28">
          <Rule
            img={prohibited}
            title="PROHIBITED WORDS"
            subtext="Use of valgar or censored words are not allowed. Go under the bridge if you want to be vulgar."
          />
          <Rule
            img={segmentation}
            title="SEGMENTATION"
            subtext="Post links or messages in the appropiate groups created in the community. You can see the other groups by opening The Queen Arit Circle commuinty from your chat list."
          />
        </div>
      </div>

      <RulesFooter />
    </div>
  );
}
