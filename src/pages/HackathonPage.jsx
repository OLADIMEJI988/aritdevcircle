import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import Logo from "../assets/QueenAritCircleLogo.webp";
import hackathonimg from "../assets/hackathonimg.webp";
import purposeimg from "../assets/purposeimg.webp";
import sideglow from "../assets/Glow.png";
import DateTimeline from "../components/DateTimeline";
import AwardsAndReg from "../components/AwardsAndReg";
import WhoCanJoin from "../components/WhoCanJoin";
import HackathonTestimonial from "../components/HackathonTestimonial";

export default function HackathonPage() {
     const navigate = useNavigate();
     const [isOpen, setIsOpen] = useState(false);
    
    
      const sectionIdFor = (label) => {
        switch (label) {
          case "Home":
            return "/";
          case "Mentorship":
            return "offer-section";
          case "Purpose":
            return "purpose";
          case "Dates":
            return "dates"; 
          case "How It Works":
            return "How_It_Works"; 
          case "Recognition":
            return "recognition"; 
          case "Who's Eligible":
            return "who's_eligible"; 
          case "Testimonial":
            return "testimonial";
            
          default:
            return "";
        }
      };

  return (
    <>
      <div
        className="relative bg-[#0E0E0E] text-white h-auto pb-10 pt-4 font-semibold"
        style={{
          backgroundImage: `url(${sideglow})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right top",
          backgroundSize: "50% auto",
        }}
      >

        <header className="bg-transparent text-[#BBBABA] mb-14 lg:mb-10 px-5 md:px-10 relative z-50">
          <div className="flex justify-between items-center mb-8">
            <Link to="/">
              <img className="h-16" src={Logo} alt="logo" />
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-2xl focus:outline-none"
            >
              {isOpen ? (
                <i className="fa-solid fa-x"></i>
              ) : (
                <i className="fa-solid fa-bars"></i>
              )}
            </button>

            {/* Desktop Menu */}
            <div className="hidden lg:flex gap-7 xl:gap-10 text-sm lg:text-[15px] xl:text-[19px] items-center tracking-wide">
              {["Home", "Dates", "Purpose", "How It Works", "Recognition", "Who's Eligible", "Testimonial"].map(
                (item, idx) => (
                  <p
                    key={idx}
                    className="relative cursor-pointer text-[#BBBABA] group hover:text-white transition"
                  >
                    <ScrollLink
                      to={sectionIdFor(item)}
                      smooth={true}
                      duration={600}
                      className="inline-block"
                    >
                      {item}
                    </ScrollLink>
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#fc4f7b] transition-all duration-300 group-hover:w-full"></span>
                  </p>
                )
              )}
              <button onClick={() => window.location.href = "https://proxy.nas.io/queenaritcircle"} className="bg-[#fc4f7b] hover:shadow-[0_0_7px_#FF4F76] cursor-pointer hoverEffect transition text-white xl:text-[20px] flex justify-center tracking-wide py-2 xl:pt-3 xl:pb-4 px-7 rounded-full font-semibold hover:opacity-90">
                Join it’s Free
              </button>
            </div>
          </div>

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                className="lg:hidden absolute left-0 w-full bg-[#0e0e0e] shadow-lg z-40 mobile:max-lg:-mt-8"
                style={{ willChange: "transform, opacity" }}
              >

                <div className="flex flex-col gap-5 text-[20px] text-center py-8 tracking-wide">
                  {[
                    { name: "Home", target: "/" },
                    { name: "Dates", target: "dates" },
                    { name: "Purpose", target: "purpose" },
                    { name: "How It Works", target: "How_It_Works" },
                    { name: "Recognition", target: "recognition" },
                    { name: "Who's Eligible", target: "who's_eligible" },
                    { name: "Testimonial", target: "testimonial" },
                    
                  ].map((link, idx) => (
                    <ScrollLink
                      key={idx}
                      to={link.target}
                      smooth={true}
                      duration={600}
                      onClick={() => setIsOpen(false)}
                    >
                      <p className="hover:cursor-pointer">{link.name}</p>
                    </ScrollLink>
                  ))}

                  <button onClick={() => window.location.href = "https://proxy.nas.io/queenaritcircle"} className="bg-[#fc4f7b] flex items-center text-white py-2 px-6 rounded-full font-semibold tracking-wide hover:opacity-90 transition mx-auto">
                    Join it’s Free
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        {/* Title */}
        <div className="mobile:max-lg:hidden tracking-wide lxl:mb-28">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
               All You Need To Know About
            </p>
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10 lg:mb-12 text-[#fc4f7b] mt-[10px]">
               October Hackathon 2025
            </p>
        </div>


       <div className="lg:hidden tracking-wide">
            <p className="text-4xl sm:text-4xl md:text-5xl">
                All You Need To
            </p>
            <p className="text-4xl sm:text-4xl md:text-5xl my-2">Know About <span className="text-[#fc4f7b]">October</span></p>
            <p className="text-4xl sm:text-4xl md:text-5xl mb-10 text-[#fc4f7b]">
                Hackathon 2025
            </p>
       </div>
       

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row lg:h-[430px] mobile:max-lg:gap-2 gap-9 px-4 lg:px-[15px] justify-center items-center">
          <div className="w-full lg:w-[1050px]">
            <img
              className="w-full rounded-2xl object-cover"
              src={hackathonimg}
              alt=""
            />
          </div>

          <div className="text-start flex flex-col justify-center h-full lg:w-[800px] mt-6 lg:mt-0">
            <p className="text-base sm:text-lg md:text-xl lg:text-[18px] lxl:text-[23px] font-normal tracking-wide">
              Welcome to the central hub for our upcoming community hackathon!
              This is where you’ll find all the key dates, details, and updates
              to guide you from registration all the way to the awards ceremony.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-[18px] lxl:text-[23px] font-normal tracking-wide mt-5">
              Our hackathon is designed to give early-career developers,
              designers, and product managers the closest possible simulation of
              real-world software ideation, development, and deployment. If
              you’ve been looking for a way to sharpen your skills, collaborate
              in teams, and bring an app concept to life,{" "}
              <span className="text-[#fc4f7b]">This is it!</span>
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div id="dates" className="scroll-mt-[80px]">
           <DateTimeline />
        </div>

        {/* Purpose Section */}
        <p id="purpose" className="text-4xl pt-2 lg:text-5xl mt-20 lg:mt-[120px] mobile:max-xxm:mt-32 xxm:max-lg:mt-0 leading-normal mb-8 md:mb-10 px-4 tracking-wide">
          Purpose Of The{" "}
          <span className="text-[#fc4f7b]">Hackathon</span>
        </p>

        <div className="flex flex-col lg:flex-row lg:h-[430px] px-4 lg:px-[15px] mobile:max-lg:gap-2 gap-8 justify-center items-center">
          <div className="w-full lg:w-[800px] flex justify-center">
            <img
              className="w-full max-h-[350px] sm:max-h-[400px] lg:max-h-[450px] object-cover rounded-2xl"
              src={purposeimg}
              alt=""
            />
          </div>

          <div className="text-start w-full lg:w-[800px] mt-6 lg:mt-0">
            <p className="text-base sm:text-lg md:text-xl lg:text-[18px] lxl:text-[23px] font-normal tracking-wide">
              The purpose of the hackathon is to bridge the gap between theory
              and practice. Many early career professionals know how to code,
              design, or manage but haven't yet worked in a fast-paced,
              cross-functional team environment where real products are built.
              By participating you will:
            </p>
            <div className="text-base sm:text-lg md:text-xl lg:text-[18px] lxl:text-[23px] font-normal tracking-wide mt-5 space-y-3">
              <p className="flex">
                <span className="-mt-[5px] mr-2 font-bold">.</span>Collaborate
                with developers, designers and product managers in a balanced
                team.
              </p>
              <p className="flex">
                <span className="-mt-[5px] mr-2 font-bold">.</span>Experience
                the full life cycle of product development from concept to
                delivery.
              </p>
              <p className="flex">
                <span className="-mt-[5px] mr-2 font-bold">.</span>Learn to
                manage time, prioritize features and work with real world
                constraints.
              </p>
              <p className="flex">
                <span className="-mt-[5px] mr-2 font-bold">.</span>Build
                portfolio worthy experience to showcase to employers and
                clients.
              </p>
            </div>
          </div>
        </div>

        <div id="How_It_Works" className="mt-20 px-[5px] lg:mt-[120px] pt-2 mobile:max-xxm:mt-32 xxm:max-lg:mt-32 tracking-wide">
            <p className="text-4xl lg:text-5xl">How It <span className="text-[#fc4f7b]">Works</span></p>
            <div className="flex justify-center relative mt-12">
                {/* Middle line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-[#2D2D2D]" />

                {/* Timeline container */}
                <div className="flex gap-3 flex-col">
                    {/* Item 1 - Right */}
                    <div className="flex justify-end relative">
                        <div className="w-1/2 flex justify-start pl-[6px] mobile:max-lg:pl-[4px]">
                            <div className="h-48 p-[1px] rounded-xl bg-[linear-gradient(90deg,#EFE3E6_0%,#DF496A_66%,#BF435E_100%)]">
                                <div className="h-full flex mobile:max-lg:flex-col gap-2 items-center text-start w-full rounded-xl bg-[#0E0E0E] text-white p-3 mobile:max-lg:py-1 mobile:max-lg:px-2">
                                    <div>
                                        <p className="text-9xl mobile:max-lg:text-4xl">1</p>
                                    </div>
                                     <div>
                                            <h2 className="text-2xl mobile:max-lg:text-xl font-bold tracking-wide">Project Details</h2>
                                            <p className="text-sm mobile:max-lg:text-[13px] mt-3 mobile:max-lg:mt-2 leading-6 mobile:max-lg:leading-5 tracking-wide font-normal">
                                                The admins will select the app concept and define both the core
                                                features (must-have) and the (nice to have).
                                            </p>
                                     </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 2 - Left */}
                    <div className="flex justify-start relative">
                        <div className="w-1/2 flex justify-end pr-[6px] mobile:max-lg:pr-[4px]">
                            <div className="h-48 p-[1px] rounded-xl bg-[linear-gradient(90deg,#EFE3E6_0%,#DF496A_66%,#BF435E_100%)]">
                               <div className="h-full flex mobile:max-lg:flex-col gap-2 items-center text-start w-full rounded-xl bg-[#0E0E0E] text-white p-3 mobile:max-lg:py-1 mobile:max-lg:px-2">
                                    <div>
                                        <p className="text-9xl mobile:max-lg:text-4xl">2</p>
                                    </div>
                                     <div>
                                            <h2 className="text-2xl mobile:max-lg:text-xl font-bold tracking-wide">Team Grouping</h2>
                                            <p className="text-sm mobile:max-lg:text-[13px] mt-3 mobile:max-lg:mt-2 leading-6 mobile:max-lg:leading-5 tracking-wide font-normal">
                                                Hackathon teams are assembled by the admins with balance in mind ( skills + experience level )
                                            </p>
                                     </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 3 - Right */}
                    <div className="flex justify-end relative">
                        <div className="w-1/2 flex justify-start pl-[6px] mobile:max-lg:pl-[4px]">
                            <div className="h-48 p-[1px] rounded-xl bg-[linear-gradient(90deg,#EFE3E6_0%,#DF496A_66%,#BF435E_100%)]">
                               <div className="h-full flex mobile:max-lg:flex-col gap-2 items-center text-start w-full rounded-xl bg-[#0E0E0E] text-white p-3 mobile:max-lg:py-1 mobile:max-lg:px-2">
                                    <div>
                                        <p className="text-9xl mobile:max-lg:text-4xl">3</p>
                                    </div>
                                     <div>
                                            <h2 className="text-2xl mobile:max-lg:text-xl font-bold tracking-wide">Team Requirement</h2>
                                            <p className="text-sm mobile:max-lg:text-[13px] mt-3 mobile:max-lg:mt-2 leading-6 mobile:max-lg:leading-5 tracking-wide font-normal">
                                                Each team is expected to create and operate a private Github repo 
                                            </p>
                                     </div>
                        
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Item 4 - Left */}
                    <div className="flex justify-start relative">
                        <div className="w-1/2 flex justify-end pr-[6px] mobile:max-lg:pr-[4px]">
                            <div className="h-48 p-[1px] rounded-xl bg-[linear-gradient(90deg,#EFE3E6_0%,#DF496A_66%,#BF435E_100%)]">
                               <div className="h-full flex mobile:max-lg:flex-col gap-2 items-center text-start w-full rounded-xl bg-[#0E0E0E] text-white p-3 mobile:max-lg:py-1 mobile:max-lg:px-2">
                                    <div>
                                        <p className="text-9xl mobile:max-lg:text-4xl">4</p>
                                    </div>
                                     <div>
                                            <h2 className="text-2xl mobile:max-lg:text-xl font-bold tracking-wide">Deadline</h2>
                                            <p className="text-sm mobile:max-lg:text-[13px] mt-3 mobile:max-lg:mt-2 leading-6 mobile:max-lg:leading-5 tracking-wide font-normal">
                                                All participating teams have 3 weeks to bring their team’s app to life before submitting for grading.
                                            </p>
                                     </div>
                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div id="recognition" className="scroll-mt-[80px]">
            <AwardsAndReg />
        </div>

        <div id="who's_eligible" className="scroll-mt-[80px]">
            <WhoCanJoin />
        </div>

        <div id="testimonial" className="scroll-mt-[80px]">
            <HackathonTestimonial />
        </div>

      </div>
    </>
  );
}
