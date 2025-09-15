import React from "react";
import { motion } from "framer-motion";
import mahmud from "../assets/mahmud.webp";
import chibuzor from "../assets/chibuzor.webp";
import michael from "../assets/michael.webp";
import delight from "../assets/delight.webp";
import opeyemi from "../assets/opeyemi.webp";
import linkedin from "../assets/linkedin.svg";
import vera from "../assets/vera.webp";
import "./HackathonTestimonial.css";

const testimonials = [
  {
    id: 1,
    name: "Mahmud A",
    role: "Frontend Developer",
    url: "https://www.linkedin.com/in/enesifrontenddev",
    img: mahmud,
    text: "Participating in the hackathon has helped me improve my collaboration skills, especially effective communication between my team members It also taught me that as much as the design is important, the functionality is also very important. This changed my perspective when it comes to building projects",
  },
  {
    id: 2,
    name: "Chibuzo O.",
    role: "Software Engineer",
    url: "https://www.linkedin.com/in/franklin-odigbo/",
    img: chibuzor,
    text: "Trust. The major thing I got from this was trusting others to take the wheel, and trusting myself to be able to do my own part to ensure the work happens to completion.",
  },
  {
    id: 3,
    name: "Michael O.",
    role: "Software Engineer",
    url: " https://www.linkedin.com/in/michael-oyedepo",
    img: michael,
    text: "Participating in the hackathon gave me an opportunity to be a technical team lead. I gained hands on experience leading a team of techstars from ideation to deployment.",
  },
  {
    id: 4,
    name: "Delight. S",
    role: "Full-Stack Developer",
    url: "https://www.linkedin.com/in/delightsheriff/ ",
    img: delight,
    text: "The hackathon was my first, and it provided me with valuable teamwork experience.  I learnt how to work effectively, how to create decent pull requests, and got vital experience that enhanced my confidence as a developer.",
  },
  {
    id: 5,
    name: "Vera N",
    role: "Frontend Developer",
    url: "https://www.linkedin.com/in/chioma-vera-nkanmuo/",
    img: vera,
    text: "Before the hackathon, I doubted my frontend skills and ability to contribute meaningfully, but the experience gave me the confidence I needed and even revealed strengths I didn’t know I had. It sharpened my frontend skills while also unlocking my capacity to lead a technical team, manage a project board and repository, and communicate effectively.",
  },
  {
    id: 6,
    name: "Opeyemi Afuwape",
    role: "Product Designer",
    url: "https://www.linkedin.com/in/afuwape-opeyemi-7919292a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    img: opeyemi,
    text: "For someone who hasn’t participated in a virtual  class, the experience was very different and great, I learned, grow from my other teammates.",
  },
];

export default function HackathonTestimonial() {
  return (
    <div className="bg-[#0e0e0e] pb-20 pt-9">
      <div
        className="text-center text-[#E3E3E3] font-semibold tracking-wide mb-8 lg:mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="mobile:max-lg:hidden text-4xl lg:text-5xl">
          Reviews From Past <span className="text-[#FA3E67]">Participants</span>
        </p>

        <p className="lg:hidden text-4xl lg:text-5xl tracking-wide">
          Reviews From
        </p>
        <p className="lg:hidden text-4xl lg:text-5xl mt-2 tracking-wide">
          Past <span className="text-[#FA3E67]">Participants</span>
        </p>
      </div>
      <div className="wrapper">
        {testimonials.map((t, index) => (
          <div key={t.id} className={`item item${index + 1}`}>
            <div className="bg-[#1D1D1D] text-start text-[#E3E3E3] rounded-2xl border border-[#707070] p-4 w-[350px] h-[230px] shadow-xl flex flex-col justify-between">
              {/* Text */}
              <p className="text-[14px] line-clamp-6">{t.text}</p>

              {/* Profile */}
              <div className="flex items-center gap-3 mt-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border border-[#4D4D4D] flex-shrink-0">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="leading-loose">
                  <h3 className="font-semibold text-[13px]">{t.name}</h3>
                  <div className="flex items-center gap-2 text-[#FA3E67]">
                    <p className="text-[11px]">{t.role}</p>
                    <a href={t.url} target="_blank" rel="noopener noreferrer">
                      <img
                        src={linkedin}
                        alt="LinkedIn"
                        className="w-5 h-5 cursor-pointer"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
